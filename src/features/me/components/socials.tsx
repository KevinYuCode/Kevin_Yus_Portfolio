import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { ReactElement } from "react";

const hoverVariants = cva(
  "p-3 hover:text-sky-300 transition-all transition-duration-100",
  {
    variants: {
      variant: {
        github: "hover:text-slate-500",
        linkedin: "hover:text-blue-500",
        instagram: "hover:text-pink-500",
        mail: "hover:text-neutral-500",
      },
    },
  }
);

type SocialLinkProps = {
  icon: ReactElement;
  href: string;
  className?: string;
  variant?: "github" | "linkedin" | "instagram" | "mail";
};

function SocialLink({ icon, href, className, variant }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "p-3 hover:text-sky-300 transition-all",
        hoverVariants({ variant }),
        className
      )}
    >
      {icon}
    </a>
  );
}

export default SocialLink;
