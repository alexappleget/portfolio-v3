import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t-2 border-white h-20 flex items-center justify-between px-6 md:px-20">
      <span className="text-white text-xs">
        © {currentYear} Alex Appleget. All Rights Reserved.
      </span>
      <div className="flex gap-4 text-white">
        <Linkedin />
        <Github />
      </div>
    </footer>
  );
};
