"use client";
import React from "react";
import { ProjectsDATA } from "./data";
import Card from "./card";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
export default function CardSwapDemo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="w-full px-4" ref={container}>
      {ProjectsDATA.map((project, i) => {
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            totalCards={ProjectsDATA.length}
          />
        );
      })}
    </section>
  );
}
