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
      <div className="overflow-clip w-full border border-teal-700 rounded-3xl flex justify-between px-10">
        <div className="w-1/2">
          <h1 className="text-4xl">Card stacks have never looked so good</h1>
          <p>Just look at it go!</p>
        </div>
        <CardSwapDemo />
      </div>
    </main>
  );
}
