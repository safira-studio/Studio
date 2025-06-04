import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="h-screen">
        <Hero />
      </div>
      <BentoDemo />
      <div className="relative">
        <motion.div
          className="pointer-events-none font-geist-mono mx-auto flex flex-col whitespace-pre-wrap text-center text-[16rem] font-bold leading-none font-outline text-transparent"
          // initial={{
          //   maskImage:
          //     "linear-gradient(to right, transparent 0%, black 0%, black 20px, transparent 20px)",
          //   WebkitMaskImage:
          //     "linear-gradient(to right, transparent 0%, black 0%, black 20px, transparent 20px)",
          //   maskPosition: "0% 0%",
          //   WebkitMaskPosition: "0% 0%",
          //   maskRepeat: "no-repeat",
          //   WebkitMaskRepeat: "no-repeat",
          // }}
        >
          <span className="bg-gradient-to-t from-black to-gray-300/80 bg-clip-text">
            <span className="text-[20rem] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
              S
            </span>
            afira
          </span>
        </motion.div>
      </div>
    </section>
  );
}
