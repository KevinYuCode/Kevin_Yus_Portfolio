import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SocialLink from "@/features/me/components/socials";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

export function Home() {
  const socials = [
    {
      href: "https://github.com/KevinYuCode",
      icon: <Github className="size-12 lg:size-8" />,
      variant: "github",
    },
    {
      href: "https://www.linkedin.com/in/kevin-yu-queens/",
      icon: <Linkedin className="size-12 lg:size-8" />,
    },
    {
      href: "https://www.instagram.com/i_kevin_yu/",
      icon: <Instagram className="size-12 lg:size-8" />,
      variant: "instagram",
    },
    {
      href: "mailto:yu.kevin2002@gmail.com",
      icon: <Mail className="size-12 lg:size-8" />,
      variant: "mail",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center flex-grow gap-8 min-h-svh">
      <section className="flex flex-col gap-4">
        <div>
          <Label className="text-5xl lg:text-4xl text-gray-600">I'm</Label>
          <h1 className="leading-none text-9xl lg:text-lg:text-8xl relative right-2">
            Kevin Yu
          </h1>
        </div>
        <Label className="text-5xl lg:text-4xl text-gray-600">
          A Computer Engineer, Software Developer, and UI & UX Designer.
        </Label>
        <div className="flex flex-row gap-8 lg:gap-4 relative right-2">
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
          className="mt-8 self-start tracking-widest font-semibold text-3xl lg:text-base py-6 lg:py-3 px-8 rounded-xl lg:rounded-lg"
        >
          <a href="/resume/Kevins-Resume.pdf" target="_blank">
            Resume
          </a>
        </Button>
      </section>
    </div>
  );
}
