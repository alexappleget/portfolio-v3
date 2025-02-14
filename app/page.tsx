import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center px-6 py-6 md:px-20 md:py-20">
      <div className="flex flex-col justify-center gap-4 text-white w-full md:w-1/2 text-center md:text-left">
        <p className="text-3xl md:text-4xl">Hey! My name is</p>
        <h1 className="text-6xl md:text-7xl font-bold">Alex Appleget</h1>
        <h2 className="text-3xl md:text-4xl font-semibold">
          And I&apos;m a{" "}
          <span className="text-[#00f0ff]">Frontend Software Engineer</span>
        </h2>
        <p className="text-lg">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development .
        </p>
        <div className="flex gap-4 mt-2 justify-center md:justify-start">
          <Github color="#00f0ff" />
          <Linkedin color="#00f0ff" />
        </div>
        <button className="bg-[#00f0ff] text-black font-semibold w-32 h-10 rounded-full mt-2 mx-auto md:mx-0">
          Download CV
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end my-8 md:my-0">
        <div className="relative size-[250px] md:size-[300px] rounded-full overflow-hidden shadow-[0_0_20px_5px_rgba(0,240,255,0.8)]">
          <Image
            alt="Headshot of Alex"
            src="/headshot.jpg"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
