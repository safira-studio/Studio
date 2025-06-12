"use client";
import React from "react";
import { ProjectsDATA } from "./data";
import Card from "./card";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import BlurText from "./ui/blurText";

export default function CardSwapDemo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeCard, setActiveCard] = React.useState(0);
  const [scrollDirection, setScrollDirection] = useState<"top" | "bottom">(
    "top"
  ); // Track scroll direction
  const prevScrollY = useRef(0); // Store previous scroll position

  // Detect scroll direction
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Update active card based on scroll position
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

    // Determine scroll direction
    if (latest > prevScrollY.current) {
      setScrollDirection("bottom"); // Scrolling down
    } else if (latest < prevScrollY.current) {
      setScrollDirection("top"); // Scrolling up
    }
    prevScrollY.current = latest; // Update previous scroll position
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
      className="max-w-7xl rounded-3xl px-6 md:px-10 relative flex flex-col lg:flex-row overflow-visible"
      ref={container}
    >
      <div className="w-full lg:w-1/2 lg:h-screen sticky top-4 z-30  backdrop-blur-sm rounded-xl pt-6 p-3 md:p-6 space-y-6 lg:p-12 ">
        <div className="flex flex-col justify-center items-start h-full">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <BlurText
              text={ProjectsDATA[activeCard]?.title}
              delay={150}
              animateBy="sentences"
              stepDuration={0.4}
              direction={scrollDirection}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
            />
            <BlurText
              text={ProjectsDATA[activeCard]?.description.slice(0, 150)}
              delay={200}
              animateBy="sentences"
              stepDuration={0.35}
              direction={scrollDirection}
              className="text-sm md:text-base font-thin text-gray-400"
            />
          </motion.div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((activeCard + 1) / ProjectsDATA.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full lg:w-1/2 relative mt-6">
        {ProjectsDATA.map((project, i) => {
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              totalCards={ProjectsDATA.length}
              tag={project.title}
            />
          );
        })}
      </div>
    </section>
  );
}
