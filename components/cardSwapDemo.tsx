"use client";
import React from "react";
import { ProjectsDATA } from "./data";
import Card from "./card";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function CardSwapDemo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeCard, setActiveCard] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = ProjectsDATA.map(
      (_, index) => (index + 0.5) / ProjectsDATA.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
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
      className="w-full border border-teal-700 rounded-3xl px-10 overflow-clip relative flex flex-col lg:flex-row"
      ref={container}
    >
      <div className="flex flex-col min-h-screen md:w-1/2">
        <div className="w-full md:sticky md:top-0 md:h-screen flex flex-col justify-center p-6 lg:p-12 space-y-6">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              {ProjectsDATA[activeCard]?.title}
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              {ProjectsDATA[activeCard]?.description}
            </p>
          </motion.div>
          <div className="flex items-center gap-4 pt-4">
            <div className="text-sm text-gray-400">
              {activeCard + 1} / {ProjectsDATA.length}
            </div>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((activeCard + 1) / ProjectsDATA.length) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section - Mobile: below text, Desktop: right side */}
      <div className="w-full lg:w-1/2 relative">
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
