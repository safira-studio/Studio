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
    <section
      className="w-full border border-teal-700 rounded-3xl flex justify-between px-10"
      ref={container}
    >
      <div className="w-1/2">
        <h1 className="text-4xl">Card stacks have never looked so good</h1>
        <p>Just look at it go!</p>
      </div>
      <div>
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
      </div>
    </section>
  );
}
