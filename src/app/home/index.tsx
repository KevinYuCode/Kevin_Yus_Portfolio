import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SocialLink from "@/features/me/components/socials";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

export function Home() {
  const socials = [
    {
      href: "https://github.com/KevinYuCode",
      icon: <Github className="!size-6" />,
      variant: "github",
    },
    {
      href: "https://www.linkedin.com/in/kevin-yu-queens/",
      icon: <Linkedin className="!size-6" />,
    },
    {
      href: "https://www.instagram.com/i_kevin_yu/",
      icon: <Instagram className="!size-6" />,
      variant: "instagram",
    },
    {
      href: "mailto:yu.kevin2002@gmail.com",
      icon: <Mail className="!size-6" />,
      variant: "mail",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center flex-grow gap-8 min-h-svh">
      <section className="flex flex-col gap-4">
        <div>
          <Label className="text-3xl text-gray-600">I'm</Label>
          <h1 className="leading-none text-8xl relative right-2">Kevin Yu</h1>
        </div>
        <Label className="text-3xl text-gray-600">
          A Computer Engineer, Software Developer, and Designer.
        </Label>
        <div className="flex flex-row gap-4 relative right-2">
          {socials.map((social) => (
            <SocialLink
              key={social.href}
              href={social.href}
              icon={social.icon}
              variant={social.variant as any}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
