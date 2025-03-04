import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SocialLink from "@/features/me/components/socials";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

export function Home() {
  const socials = [
    {
      href: "https://github.com/KevinYuCode",
      icon: <Github className="size-4 md:size-8" />,
      variant: "github",
    },
    {
      href: "https://www.linkedin.com/in/kevin-yu-queens/",
      icon: <Linkedin className="size-4 md:size-8" />,
    },
    {
      href: "https://www.instagram.com/i_kevin_yu/",
      icon: <Instagram className="size-4 md:size-8" />,
      variant: "instagram",
    },
    {
      href: "mailto:yu.kevin2002@gmail.com",
      icon: <Mail className="size-4 md:size-8" />,
      variant: "mail",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center flex-grow gap-8 min-h-svh">
      <section className="flex flex-col gap-2">
        <Label className="text-md md:text-4xl text-gray-600">I'm</Label>
        <h1 className="leading-none text-5xl md:text-8xl relative right-1">
          Kevin Yu
        </h1>
        <Label className="text-md md:text-4xl text-gray-600">
          A Computer Engineer, Software Developer, and UI & UX Designer.
        </Label>
        <div className="flex flex-row gap-1 md:gap-4 relative right-3">
          {socials.map((social) => (
            <SocialLink
              key={social.href}
              href={social.href}
              icon={social.icon}
              variant={social.variant as any}
            />
          ))}
        </div>
        <Button
          asChild
          className="mt-8 self-start tracking-widest font-semibold text-xs md:text-xl py-3 px-8 rounded-lg"
        >
          <a href="/resume/Kevins-Resume.pdf" target="_blank">
            Resume
          </a>
        </Button>
      </section>
    </div>
  );
}
