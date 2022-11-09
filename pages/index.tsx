import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { Noto_Sans, Unna } from "@next/font/google";
import elsvg from "../public/eupholee.svg";
import blackDog from "../public/images/blackDog.webp";
import light from "../public/images/light.webp";
import project1 from "../public/images/project1.webp";

const notoSans = Noto_Sans({ weight: "500" });
const notoSansB = Noto_Sans({ weight: "700" });
const unna = Unna({ weight: "700" });

const TopBar = () => {
  return (
    <div className=" flex h-[48px] w-full items-center justify-between text-main">
      <div>
        <Image src={elsvg} alt="" width="32" height="32"></Image>
      </div>
      <span className={` text-[12px] ${notoSansB.className}`}>
        WEB DEVELOP&DESIGN
      </span>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex h-[216px] w-full items-center justify-center border-[1px] border-main bg-main">
      <div className=" h-full w-full rounded-[8px] bg-back">{children}</div>
    </div>
  );
};

const HomeCard = () => {
  return (
    <Card>
      <div className="relative h-full ">
        <div className="ml-[10vw] flex h-full flex-col justify-between py-[16px]">
          <p className={`${unna.className} text-[32px] leading-snug text-main`}>
            EUPHO
            <br />
            &nbsp;&nbsp;LEE
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;DESIGN
          </p>
          <div className="flex items-center gap-[16px]">
            <div className=" flex h-[32px] w-[116px] items-center justify-center rounded-full bg-highlight">
              <span className={`${notoSans.className} text-[12px] text-soft`}>
                Get in touch
              </span>
            </div>
            <div className=" flex h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] border-main text-main">
              <Icon icon="clarity:email-solid" />
            </div>
          </div>
        </div>
        <div className=" absolute top-[48px] right-[-17px] aspect-[1/1.8] w-[40vw] min-w-[128px] max-w-[175px] ">
          <Image
            src={blackDog}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </div>
        <div className=" absolute right-[25vw] top-[20px] rotate-[16deg]">
          <Image src={light} alt="" width="48" />
        </div>
      </div>
    </Card>
  );
};

const BlogCard = () => {
  return (
    <Card>
      <div className=" flex h-full flex-col justify-between rounded-[8px] bg-[#e7e1e2] py-[16px] text-main">
        <p
          className={` w-[180px] ${notoSans.className} ml-[10vw] text-[14px] text-main`}
        >
          Record what I learned and my ideas.
          <br />
          <br />
          Feel free to take a look and leave your comments.
        </p>
        <div className=" mx-[10vw] flex items-center justify-between ">
          <Icon icon="jam:write" width={32} />
          <span className={`${unna.className} text-[36px] `}>BLOG</span>
        </div>
      </div>
    </Card>
  );
};

const ProjectCard = () => {
  return (
    <Card>
      <div className="group relative h-full">
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
          className={` absolute right-[10vw] bottom-[16px] ${unna.className} text-[36px] text-main transition-opacity duration-200 ease-in-out group-hover:opacity-[20%] `}
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
    <div className=" flex h-[48px] w-full items-center justify-end text-main">
      <div>
        <Icon icon="fluent-mdl2:git-hub-logo" width={24} />
      </div>
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
        <HomeCard />
        <BlogCard />
        <ProjectCard />
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
