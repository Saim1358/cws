"use client";

import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Motion from "./components/Motion";

export default function Home() {
  const type = useRef(null);
  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        "HTML,CSS,JS",
        "React",
        "NextJS",
        "MERN",
        "Tailwindcss",
        "MongoDB",
        "Python",
        "React Native",
      ],
      typeSpeed: 80,
      loop: true,
      backSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="home m-h-screen flex flex-col md:flex-row justify-center items-center pt-8 md:pt-32 px-10 md:px-20">
        <div className="home-content">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Hello, It&apos;s Me{" "}
            </h3>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-3 my-5">
              Saiful Islam Saim
            </h1>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              And I Know <span className="text-red-500" ref={type}></span>
            </h3>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-base md:text-lg my-5">
              Hey, What&lsquo;s up ! In this Website , You can find all of my
              projects. Basically, I made this website to manage all of my
              projects in a single website .
            </p>
          </Motion>
          <div className="social-media flex items-center gap-5 w-16 h-16 bg-transparent text-red-500 my-5 md:my-12 mr-6">
            <Link
              className={
                "border-solid border-4 p-3 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
              }
              href={"https://www.facebook.com/Saiful.Islam.Saim.1358"}
              target="_blank"
            >
              <FiFacebook />
            </Link>
            <Link
              className={
                "border-solid border-4 p-3 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
              }
              href={"https://t.me/Saim1358"}
              target="_blank"
            >
              <FaTelegramPlane />
            </Link>
            <Link
              className={
                "border-solid border-4 p-3 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
              }
              href={
                "https://www.linkedin.com/mwlite/in/saiful-islam-saim-782773278"
              }
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </div>
          <Link
            className={"btn btn-primary"}
            href={"/cws-resume.pdf"}
            target="_blank"
          >
            Download Resume
          </Link>
        </div>
        <div className="hone-img">
          <Image
            className="rounded-xl animate-[logo_3s_ease-in-out_infinite] repeat-infinite"
            src="/img/logoBGRemoved.png"
            alt="logo"
            width={900}
            height={900}
          />
        </div>
      </section>
    </>
  );
}
