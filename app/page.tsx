"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import Card from "@/components/card";
import { ProjectsDATA } from "@/components/data";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={container}
      className="flex flex-col items-center justify-center gap-4"
    >
      {/* Section 1: Hero full screen */}
      <section className="h-screen w-full">
        <Hero />
      </section>

      {/* Section 2: Bento cards */}
      <section className="w-full">
        <BentoDemo />
      </section>

      {/* Section 3: Scrollable Project Cards */}
      <section className="w-full px-4">
        {ProjectsDATA.map((project, i) => {
          const targetScale = 1 - (ProjectsDATA.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
}
