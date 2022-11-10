import { EMAILPUBLICKEY, EMAILSERVERID, EMAILTEMPLATEID } from "../config";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Field } from "react-final-form";
import { Noto_Sans } from "@next/font/google";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

type valuesType = React.FormEvent<Element> &
  Record<string, string> & {
    name: string;
    email: string;
    subtitle: string;
    message: string;
  };
type errorsType = {
  name?: string;
  email?: string;
  subtitle?: string;
  message?: string;
};

const Contact = ({
  setShowContact,
}: {
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useRef<HTMLFormElement>(null!);
  const backPage = useRef<HTMLDivElement>(null!);
  const [disSubmit, setDisSubmit] = useState(false);
  const [renderSuccess, setRenderSuccess] = useState(false);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (form?.current?.contains(e.target as Node)) return;
      if (e.target === backPage.current) setShowContact(false);
    };
    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const onSubmit = (values: valuesType) => {
    setDisSubmit(true);
    emailjs.send(EMAILSERVERID, EMAILTEMPLATEID, values, EMAILPUBLICKEY).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        setDisSubmit(false);
        setRenderSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setRenderError(true);
      }
    );
  };

  return (
    <div
      ref={backPage}
      className=" absolute top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center backdrop-blur-lg"
    >
      {!(renderError || renderSuccess) ? (
        <div>
          <Form
            onSubmit={onSubmit}
            validate={(values: valuesType) => {
              const errors: errorsType = {};
              if (!values.name) errors.name = "Required";
              if (!values.email) errors.email = "Required";
              if (!values.subtitle) errors.subtitle = "Required";
              if (!values.message) errors.message = "Required";
              return errors;
            }}
            render={({ handleSubmit }) => (
              <form ref={form} className="px-[16px]" onSubmit={handleSubmit}>
                <div className=" mb-[24px] flex flex-row items-center  justify-center gap-[32px]">
                  <Field name="name">
                    {({ input, meta }) => (
                      <div className="relative basis-1/3">
                        <label className=" font-notoSans block text-[12px] font-bold text-main">
                          YOUR NAME
                        </label>
                        <input
                          {...input}
                          type="text"
                          className=" h-[32px] w-full border border-main"
                        />
                        {meta.error && meta.touched && (
                          <span className=" absolute bottom-[-20px] left-0 text-[12px] font-bold text-red-600">
                            *{meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>

                  <Field name="email">
                    {({ input, meta }) => (
                      <div className=" relative basis-2/3">
                        <label className=" font-notoSans block text-[12px] font-bold text-main">
                          YOUR EMAIL
                        </label>
                        <input
                          {...input}
                          type="email"
                          className=" h-[32px] w-full border border-main"
                        />
                        {meta.error && meta.touched && (
                          <span className=" absolute bottom-[-20px] left-0 text-[12px] font-bold text-red-600">
                            *{meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <Field name="subtitle">
                  {({ input, meta }) => (
                    <div className=" relative mb-[16px]">
                      <label className=" font-notoSans block text-[12px] font-bold text-main">
                        SUBTITLE
                      </label>
                      <input
                        {...input}
                        type="text"
                        className=" h-[32px] w-full border border-main"
                      />
                      {meta.error && meta.touched && (
                        <span className=" absolute bottom-[-20px] left-0 text-[12px] font-bold text-red-600">
                          *{meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <Field name="message">
                  {({ input, meta }) => (
                    <div className=" relative mb-[16px]">
                      <label className=" font-notoSans block text-[12px] font-bold text-main">
                        MESSAGE
                      </label>
                      <textarea
                        {...input}
                        name="message"
                        className=" h-[64px] w-full overflow-auto break-words border border-main"
                      />
                      {meta.error && meta.touched && (
                        <span className=" absolute bottom-[-20px] left-0 text-[12px] font-bold text-red-600">
                          *{meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <div className="flex items-center justify-end gap-1 ">
                  {disSubmit ? (
                    <CircularProgress size={20} color="success" />
                  ) : null}

                  <button
                    type="submit"
                    className=" h-[24px] w-[134px] rounded-full bg-highlight text-[12px] text-white disabled:hover:cursor-not-allowed"
                    disabled={disSubmit}
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </form>
            )}
          ></Form>
        </div>
      ) : null}
      {renderSuccess ? (
        <Alert severity="success">
          <strong>The email was sent successfully!</strong>
        </Alert>
      ) : null}
      {renderError ? (
        <Alert severity="error">
          <strong>Something went wrong, please sent email again!</strong>
        </Alert>
      ) : null}
    </div>
  );
};

export default Contact;
