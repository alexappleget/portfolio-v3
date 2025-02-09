import { Github, HomeIcon, PawPrint } from "lucide-react";
import { OrbitingCircles } from "../Orbiting Circles/orbiting-circles";

export const HeroPhoto = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Photo
      </span>
      <OrbitingCircles>
        <HomeIcon />
        <PawPrint />
        <Github />
      </OrbitingCircles>
    </div>
  );
};
