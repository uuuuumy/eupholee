import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { Noto_Sans, Unna } from "@next/font/google";
import elsvg from "../public/eupholee.svg";
import blackDog from "../public/images/blackDog.webp";
import light from "../public/images/light.webp";
import project1 from "../public/images/project1.webp";

import Contact from "../components/Contact";

const notoSans = Noto_Sans({ weight: "500" });
const notoSansB = Noto_Sans({ weight: "700" });
const unna = Unna({ weight: "700" });

const TopBar = () => {
  return (
    <div className=" flex h-[8vh] min-h-[32px] w-full items-center justify-between bg-back text-main ">
      <div>
        <Image src={elsvg} alt="" width="32" height="32"></Image>
      </div>
      <span className={` text-[12px] ${notoSansB.className} `}>
        WEB DEVELOP&DESIGN
      </span>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        " flex h-[28vh] min-h-[200px] w-full items-center justify-center border-[1px] border-main bg-main md:h-[42vh] md:w-[48vw]"
      }
    >
      <div className=" h-full w-full rounded-[8px] bg-back">{children}</div>
    </div>
  );
};

const HomeCard = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <React.Fragment>
      <Card>
        <div className="relative h-full">
          <div className="ml-[10vw] flex h-full flex-col justify-center gap-[2vh] md:gap-[8vh]">
            <p
              className={`${unna.className} text-[32px] leading-snug text-main lg:text-[40px]`}
            >
              EUPHO
              <br />
              &nbsp;&nbsp;LEE
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;DESIGN
            </p>
            <div className="flex items-center gap-[16px]">
              <div
                className=" flex h-[32px] w-[116px] cursor-pointer items-center justify-center rounded-full bg-highlight transition-all duration-200 ease-in-out hover:translate-y-[-2px] lg:h-[40px] lg:w-[148px]"
                onClick={() => setShowContact(true)}
              >
                <span
                  className={`${notoSans.className}  text-[12px] text-white lg:text-[16px]`}
                >
                  Get in touch
                </span>
              </div>
              <div className=" flex h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] border-main text-main lg:h-[32px] lg:w-[32px]">
                <Icon icon="clarity:email-solid" />
              </div>
            </div>
          </div>
          <div className=" absolute top-[48px] right-[-17px] aspect-[1/1.8] w-[40vw] min-w-[128px] max-w-[175px] md:right-[-48vw] md:top-[0] md:z-10 md:h-[45vh] md:max-w-none">
            <Image
              src={blackDog}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
          <div className=" absolute right-[25vw] top-[20px] rotate-[16deg] md:right-[-8vw]">
            <Image src={light} alt="" width="48" />
          </div>
        </div>
      </Card>
      {showContact ? <Contact setShowContact={setShowContact} /> : null}
    </React.Fragment>
  );
};

const BlogCard = () => {
  return (
    <Card>
      <div className=" flex h-full flex-col justify-center gap-[2vh] rounded-[8px] bg-[#e7e1e2] text-main md:justify-between md:py-[8vh]">
        <p
          className={` w-[180px] ${notoSans.className} ml-[10vw] text-[14px] text-main lg:w-[240px] lg:text-[18px]`}
        >
          Record what I learned and my ideas.
          <br />
          <br />
          Feel free to take a look and leave your comments.
        </p>
        <div className=" mx-[10vw] flex items-center justify-between ">
          <Icon icon="jam:write" width={32} />
          <span className={`${unna.className} text-[36px] lg:text-[40px] `}>
            BLOG
          </span>
        </div>
      </div>
    </Card>
  );
};

const ProjectCard = () => {
  return (
    <Card>
      <div className="group relative z-20 h-full">
        <div
          className="h-full rounded-[8px] blur-[2px] transition-all duration-200 ease-in-out group-hover:blur-0"
          style={{
            backgroundImage: `url(${project1.src})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <span
          className={` absolute right-[10vw] bottom-[16px] md:bottom-[8vh] ${unna.className} text-[36px] text-main transition-opacity duration-200 ease-in-out group-hover:opacity-[20%] lg:text-[40px] `}
        >
          PROJECT
        </span>
        <div className=" invisible absolute left-[4vw] top-[50%] cursor-pointer transition-all duration-200 ease-in-out group-hover:visible group-hover:blur-0">
          <Icon icon="ant-design:left-outlined" width={16} />
        </div>
        <div className=" invisible absolute right-[4vw] top-[50%] cursor-pointer transition-all duration-200 ease-in-out group-hover:visible group-hover:blur-0">
          <Icon icon="ant-design:right-outlined" width={16} />
        </div>
      </div>
    </Card>
  );
};

const Footer = () => {
  return (
    <div className=" flex h-[8vh] min-h-[32px] w-full items-center justify-end text-main">
      <a href="https://github.com/uuuuumy/eupholee">
        <Icon icon="fluent-mdl2:git-hub-logo" width={24} />
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Head>
        <title>EuphoLee</title>
        <meta
          name="description"
          content="Homepage of EuphoLee, about web development and design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex w-full min-w-[320px] flex-col items-center bg-back px-[16px] ">
        <TopBar></TopBar>
        <div className=" w-full border-[1px] border-black md:w-auto">
          <div className="w-full md:flex md:justify-center">
            <HomeCard />
            <div className="hidden md:block">
              <Card>{}</Card>
            </div>
          </div>

          <div className="w-full md:flex md:justify-center">
            <BlogCard />
            <ProjectCard />
          </div>
        </div>

        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
