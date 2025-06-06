"use client";
import { BentoDemo } from "@/components/BentoDemo";
import CardSwapDemo from "@/components/cardSwapDemo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="h-screen">
        <Hero />
      </div>
      <CardSwapDemo />
      <BentoDemo />
    </section>
  );
}
