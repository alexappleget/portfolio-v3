"use client";

import { AboutMeSection } from "@/components/AboutMe/AboutMe";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProjectSection } from "@/components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
    </>
  );
}
