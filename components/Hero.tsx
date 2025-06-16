"use client";
import React from "react";
import { Meteors } from "./magicui/meteors";
import { MaskContainer } from "./ui/svg-mask-effect";
import { motion } from "motion/react";

export default function Hero() {
  const sFont = "test";
  const restFont = "geist-sans";
  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
      <Meteors number={30} />
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className={`font-${restFont} text-[16rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-fit`}
        >
          <MaskContainer
            revealText={
              <motion.span
                className={` pointer-events-none mx-auto flex flex-col whitespace-pre-wrap text-center font-bold leading-none text-transparent`}
                initial={{ "--x": "-100%" } as any}
                animate={{ "--x": "125%" } as any}
                transition={{
                  delay: 0.2,
                  duration: 3,
                  ease: "easeInOut",
                  repeat: 2,
                  repeatDelay: 0.5,
                  repeatType: "loop",
                }}
              >
                {/* Base text with gradient */}
                <span className="bg-gradient-to-t from-black to-gray-300/80 bg-clip-text text-transparent">
                  <span
                    className={` font-${sFont} text-[20rem] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text`}
                  >
                    S
                  </span>
                  afira
                </span>

                {/* Outline text that sweeps across */}
                <span
                  className="absolute inset-0 font-outline text-transparent"
                  style={{
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, transparent calc(var(--x) - 5%), white calc(var(--x) - 10%), white calc(var(--x) + 10%), transparent calc(var(--x) + 5%), transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, transparent calc(var(--x) - 5%), white calc(var(--x) - 10%), white calc(var(--x) + 10%), transparent calc(var(--x) + 5%), transparent 100%)",
                  }}
                >
                  <span className={`font-${sFont} text-[20rem]`}>S</span>
                  afira
                </span>
              </motion.span>
            }
            className="w-full h-full overflow-visible"
          >
            <span
              className={`text-[16rem] pointer-events-none font-outline mx-auto  flex flex-col whitespace-pre-wrap text-center font-bold leading-none text-transparent`}
            >
              <span className="">
                <span className={`font-${sFont} text-[20rem]`}>S</span>
                afira
              </span>
            </span>
          </MaskContainer>
        </div>

        <div
          className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px] pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex flex-col w-full h-full blur">
            <div
              className="grow"
              style={{
                background:
                  "conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(255, 208, 134) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)",
              }}
            ></div>
            <div
              className="grow"
              style={{
                background:
                  "conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(255, 208, 134) 324deg, rgb(255, 255, 255) 342deg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
