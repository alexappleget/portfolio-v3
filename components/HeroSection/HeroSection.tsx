"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-start px-6 py-6 md:px-20 md:py-20">
      <div className="flex flex-col justify-center gap-6 md:gap-4 text-white w-full md:w-1/2 text-center md:text-left md:mt-0">
        <p className="text-3xl md:text-4xl">Hey! My name is</p>
        <h1 className="text-5xl md:text-7xl font-bold">Alex Appleget</h1>
        <h2 className="text-3xl md:text-4xl font-semibold">
          And I&apos;m a{" "}
          <span className="text-[#00f0ff]">Frontend Software Engineer</span>
        </h2>
        <p className="md:text-lg">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development .
        </p>
        <div className="flex gap-4 mt-10 md:mt-0">
          <Link
            href="/01_Alex Appleget.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center justify-center bg-[#00f0ff] hover:bg-[#00aebb] text-[#20242d] font-semibold w-40 h-12 rounded-full mt-2 mx-auto md:mx-0"
          >
            Download CV
          </Link>
          <Link
            href=""
            className="flex items-center justify-center bg-[#20242d] hover:bg-[rgba(0,240,255,0.2)] text-[#00f0ff] border-2 border-[#00f0ff] font-semibold w-40 h-12 rounded-full mt-2"
          >
            See My Work
          </Link>
        </div>
      </div>
      <div className="hidden w-full md:w-1/2 md:flex justify-center md:justify-end my-8 md:my-0">
        <div className="relative size-[250px] md:size-[375px] rounded-full overflow-hidden shadow-[0_0_20px_5px_rgba(0,240,255,0.8)]">
          <Image
            alt="Headshot of Alex"
            src="/headshot.jpg"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden absolute bottom-6 left-20 md:flex gap-4 sm:hidden">
        <Link
          href="https://github.com/alexappleget"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="size-6 text-[#00f0ff] hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alex-appleget/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="size-6 text-[#00f0ff] hover:text-white" />
        </Link>
      </div>
    </section>
  );
};
