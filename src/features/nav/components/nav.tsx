import { Label } from "@/components/ui/label";
import React from "react";

const links = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Hackathons",
    href: "#hackathons",
  },
  {
    name: "Life",
    href: "#life",
  },
];
export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-10 px-20 py-8 ">
      <section className="flex flex-row justify-between items-center text-2xl">
        {/* <span className="font-bold">KY</span>
        <div className="flex flex-row gap-8">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              target="_blank"
              className="hover:text-neutral-500 transition-colors duration-100"
            >
              {link.name}
            </a>
          ))}
        </div> */}
      </section>
    </nav>
  );
}
