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
      <div className="w-full relative overflow-clip">
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
    </main>
  );
}
