import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t-2 border-white h-20 flex items-center justify-between px-6 md:px-20">
      <span className="text-white text-xs">
        © {currentYear} Alex Appleget. All Rights Reserved.
      </span>
      <div className="flex gap-4 text-white">
        <Link
          href="https://www.linkedin.com/in/alex-appleget/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={30}
            className="border-[1px] p-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          />
        </Link>
        <Link
          href="https://github.com/alexappleget"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={30}
            className="border-[1px] p-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          />
        </Link>
      </div>
    </footer>
  );
};
