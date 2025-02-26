"use client";

import Image from "next/image";
import Link from "next/link";
import { NeonGradientCardGlow } from "../NeonGradientCard/neon-gradient-card";
import React from "react";

export const HeroSection = ({
  projectRef,
}: {
  projectRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const handleScrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="w-full md:min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-start mt-24 mb-40 md:mt-0 md:mb-0">
      <div className="flex flex-col justify-center gap-6 md:gap-4 text-white w-full md:w-1/2 text-center md:text-left">
        <p className="text-3xl md:text-4xl">Hey! My name is</p>
        <h1 className="text-5xl md:text-7xl font-bold">Alex Appleget</h1>
        <h2 className="text-3xl md:text-4xl font-semibold">
          And I&apos;m a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF00AA]">
            Frontend Software Engineer
          </span>
        </h2>
        <p className="md:text-lg">
          I build dynamic and efficient web applications using React, NextJS,
          TypeScript, and AI Models to create seamless user experiences.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link
            href="/01_Alex Appleget.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center justify-center bg-gradient-to-r from-[#00F0FF] to-[#FF00AA] text-[#20242d] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] font-bold w-40 h-12 rounded-full mt-2"
          >
            Download CV
          </Link>
          <button
            onClick={handleScrollToProjects}
            className="bg-gradient-to-r from-[#00F0FF] to-[#FF00AA] text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] font-bold w-40 h-12 rounded-full mt-2 p-[2.5px]"
          >
            <div className="bg-[#20242d] h-full w-full rounded-full flex items-center justify-center">
              See My Work
            </div>
          </button>
        </div>
      </div>
      <div className="hidden w-full md:w-1/2 md:flex justify-center md:justify-end">
        <NeonGradientCardGlow
          className="size-[250px] md:size-[375px] rounded-full flex items-center justify-center"
          borderSize={6}
          borderRadius={9999}
          neonColors={{
            firstColor: "#00F0FF",
            secondColor: "#FF00AA",
            thirdColor: "#8000FF",
            fourthColor: "#0000FF",
          }}
        >
          <div className="relative size-[250px] md:size-[375px] rounded-full overflow-hidden">
            <Image
              alt="Headshot of Alex"
              src="/headshot.jpg"
              fill
              className="object-cover"
            />
          </div>
        </NeonGradientCardGlow>
      </div>
    </section>
  );
};
