"use client";

import { NeonGradientCardNoGlow } from "../NeonGradientCard/neon-gradient-card";
import { Card, CardContent } from "../Card/card";
import { Code, Plane } from "lucide-react";

const aboutMeItems = [
  {
    icon: <Code className="size-6 md:size-8" />,
    title: "Skills",
    description:
      "Proficient in React, Next.js, TypeScript, and Tailwind CSS, with a strong focus on building responsive, accessible web applications. Experienced in integrating and working with large language models to enhance functionality and user experience.",
  },
  {
    icon: <Plane className="size-6 md:size-8" />,
    title: "Passion",
    description:
      "Obsessed with traveling and exploring new places. Huge Harry Potter fan—still waiting for my Hogwarts letter! Love experiencing new cultures and a bit of magic, both real and fictional.",
  },
];

export const AboutMeSection = () => {
  return (
    <section className="flex flex-col gap-10 w-full">
      <h2 className="text-white text-3xl font-bold">About Me</h2>
      <NeonGradientCardNoGlow borderSize={6}>
        <Card className="rounded-xl bg-[#20242d] p-6 md:p-8">
          <CardContent className="text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              My Journey
            </h3>
            <p className="text-sm md:text-base mb-4">
              I&apos;m Alex Appleget, a self-taught Frontend Software Engineer
              with a strong focus on building functional, user-centered web
              applications. My journey into web development began just over a
              year ago, and since then, I&apos;ve embraced a constant path of
              growth and learning.
            </p>
            <p className="text-sm md:text-base mb-4">
              What excites me most is the ability to turn ideas into reality
              through code. I thrive on solving complex problems and find
              satisfaction in seeing users engage with the interfaces I build. A
              pivotal moment in my career came when my team and I won a
              hackathon, which led to my apprenticeship leader deciding to
              completely pivot and focus on our app. He saw its potential to
              generate revenue, and as a result, I&apos;m now considered a
              co-founder.
            </p>
            <p className="text-sm md:text-base">
              When I&apos;m not coding, you can find me traveling with my wife
              or immersing myself in video games.
            </p>
          </CardContent>
        </Card>
      </NeonGradientCardNoGlow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutMeItems.map((item, index) => (
          <NeonGradientCardNoGlow key={index} borderSize={6}>
            <Card className="flex flex-col h-full rounded-xl bg-[#20242d]">
              <CardContent className="flex flex-col items-center text-center p-6 h-full">
                <div className="mb-4 p-3 bg-gradient-to-r from-[#00F0FF] to-[#FF00AA] rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </NeonGradientCardNoGlow>
        ))}
      </div>
    </section>
  );
};
