"use client";

import { AboutMeSection } from "@/components/AboutMe/AboutMe";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProjectSection } from "@/components/ProjectSection/ProjectSection";
import { useRef } from "react";

export default function Home() {
  const projectRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <HeroSection projectRef={projectRef} />
      <AboutMeSection />
      <ProjectSection ref={projectRef} />
    </>
  );
}
