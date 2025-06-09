import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";
import CardSwapDemo from "@/components/cardSwapDemo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      {/* Section 1: Hero full screen */}
      <section className="h-screen w-full">
        <Hero />
      </section>

      {/* Section 2: Bento cards */}
      <section className="w-full">
        <BentoDemo />
      </section>
      <div className="overflow-clip w-full border border-green-500">
        <CardSwapDemo />
      </div>
    </main>
  );
}
