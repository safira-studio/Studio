import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Replace, Terminal, X } from "lucide-react";
import { GithubIcon } from "./icons";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "Products",
      icon: <Terminal className="h-full w-full text-white" />,
      href: "#",
    },
    // {
    //   title: "Components",
    //   icon: <IconNewSection className="h-full w-full  text-white" />,
    //   href: "#",
    // },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <img
    //       src="https://assets.aceternity.com/logo-dark.png"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: "#",
    // },
    {
      title: "Changelog",
      icon: <Replace className="h-full w-full  text-white" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <X className="h-full w-full  text-white" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <GithubIcon className="h-full w-full  text-white" />,
      href: "#",
    },
  ];
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-600/30 rounded-full">
      <FloatingDock
        mobileClassName="translate-y-0" // remove translate-y-20 for production
        items={links}
      />
    </div>
  );
}
