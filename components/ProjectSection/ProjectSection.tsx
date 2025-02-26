"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/card";
import Image from "next/image";
import { NeonGradientCardNoGlow } from "../NeonGradientCard/neon-gradient-card";
import React from "react";

const projects = [
  {
    img: "/gridiron-survivor.png",
    imgAlt: "Photo of the Gridiron Survivor Project",
    title: "Gridiron Survivor",
    description:
      "Gridiron Survivor is a SaaS platform that empowers admins to create and manage their own NFL survivor pools. From setting pool rules to managing participants, admins have complete control over their users and game settings, ensuring a tailored experience for every league.",
    href: "https://www.gridironsurvivor.com/",
  },
  {
    img: "/elfgorithm.png",
    imgAlt: "Photo of the Elfgorithm Project",
    title: "Elfgorithm",
    description:
      "Elfgorithm simplifies Secret Santa and gift exchanges with AI-powered gift suggestions tailored to each recipient. It helps manage groups, set draw dates with reminders, and customize every detail, making gifting fun and effortless.",
    href: "https://elfgorithm.vercel.app/",
  },
  {
    img: "/tripwhiz-ai.png",
    imgAlt: "Photo of the TripWhiz AI Project",
    title: "TripWhiz AI",
    description:
      "TripWhiz AI creates personalized vacation itineraries based on your unique interests, offering budget-friendly options and one-of-a-kind experiences. It takes the stress out of planning, ensuring your trip is exactly what you want.",
    href: "",
  },
];

export const ProjectSection = React.forwardRef<HTMLDivElement | null>(
  (_, ref) => {
    return (
      <section
        ref={ref}
        id="project-section"
        className="flex flex-col gap-10 w-full py-6 md:py-20 mt-20"
      >
        <h2 className="text-white text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-20 md:gap-8 text-white">
          {projects.map((project) => (
            <NeonGradientCardNoGlow key={project.title} borderSize={6}>
              <Card className="flex flex-col gap-2 md:gap-4 rounded-xl bg-[#20242d]">
                <CardHeader className="relative h-60">
                  <Image
                    alt={project.imgAlt}
                    src={project.img}
                    fill
                    className="object-cover pt-4 pl-4 pr-4 md:pt-6 md:pl-6 md:pr-6"
                  />
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardTitle className="text-xl md:text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm mt-4 h-28 md:h-32">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-[#00F0FF] to-[#FF00AA] text-[#20242d] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] font-bold w-52 mx-auto md:mx-0 md:w-32 h-10 rounded-full"
                    >
                      Live View
                    </Link>
                  ) : (
                    <button className="bg-gradient-to-r from-[#00F0FF] to-[#FF00AA] text-white font-bold w-52 mx-auto md:mx-0 md:w-32 h-10 rounded-full cursor-not-allowed p-[2.5px]">
                      <div className="bg-[#20242d] h-full w-full rounded-full flex items-center justify-center">
                        Coming Soon
                      </div>
                    </button>
                  )}
                </CardFooter>
              </Card>
            </NeonGradientCardNoGlow>
          ))}
        </div>
      </section>
    );
  }
);

ProjectSection.displayName = "ProjectSection";
