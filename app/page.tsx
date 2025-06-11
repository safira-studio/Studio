import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
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
      <div className="w-full relative">
        <div
          aria-hidden="true"
          className="absolute right-[90%] inset-y-0  bg-gradient-to-l from-black/50  via-black/80 to-black z-20 w-[500px] backdrop-blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute left-[90%] inset-y-0  bg-gradient-to-r from-black/50  via-black/80 to-black z-20 w-[500px] backdrop-blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, black 80%, transparent 100%)",
          }}
        />
        <CardSwapDemo />
      </div>
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo={false}
        enableTilt={false}
      />
    </main>
  );
}
