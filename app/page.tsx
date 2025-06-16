import { BentoDemo } from "@/components/BentoDemo";
import { FloatingDockDemo } from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import CardSwapDemo from "@/components/cardSwapDemo";
import { FeaturesSectionDemo } from "@/components/featureSection";
import { HeroParallaxDemo } from "@/components/heroDemo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      {/* Section 1: Hero full screen */}
      <section className="h-screen w-full">
        <Hero />{" "}
      </section>
      <HeroParallaxDemo />

      {/* Section 2: Bento cards */}
      <section className="w-full">
        <BentoDemo />
      </section>
      <FeaturesSectionDemo />
      <div className="w-full max-w-7xl relative overflow-clip">
        <div
          aria-hidden="true"
          className="absolute left-[0%] inset-y-0  bg-gradient-to-l from-transparent  via-black/80 to-black z-20  md:w-40 lg:w-[200px] backdrop-blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-[0%] inset-y-0  bg-gradient-to-l from-black/80 md:from-black  via-black/70 to-transparent z-20 w-16 md:w-40 lg:w-[200px] backdrop-blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, black 70%, transparent 100%)",
          }}
        />
        <CardSwapDemo />
      </div>
      {/* <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo={false}
        enableTilt={false}
      /> */}
      <FloatingDockDemo />
    </main>
  );
}
