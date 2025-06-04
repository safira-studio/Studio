"use client";
import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";
import { motion } from "motion/react";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="h-screen">
        <Hero />
      </div>

      <BentoDemo />
    </section>
  );
}
