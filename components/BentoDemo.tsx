import { CpuIcon, GlobeIcon, ShieldCheckIcon, RocketIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export function BentoDemo() {
  return (
    <BentoGrid>
      {/* Box 1: Top-left */}
      <BentoCard
        Icon={GlobeIcon}
        name="Advanced AI Algorithms"
        description="Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs."
        href="#"
        cta="Explore"
        className="row-start-1 col-start-1"
      />

      {/* Box 2: Top-middle */}
      <BentoCard
        Icon={ShieldCheckIcon}
        name="Secure Data Handling"
        description="We prioritize your data security with encryption and strict privacy protocols."
        href="#"
        cta="Learn More"
        className="row-start-1 col-start-2"
      />

      {/* Box 3: Right tall card */}
      <BentoCard
        Icon={CpuIcon}
        name="Seamless Integration"
        description="Easily integrate our AI solutions into your existing workflows and systems."
        href="#"
        cta="Get Started"
        className="row-span-2 col-start-3"
      />

      {/* Box 4: Bottom full-width under Box 1 + 2 */}
      <BentoCard
        Icon={RocketIcon}
        name="Customizable Solutions"
        description="Tailor our AI services to your specific needs with flexible customization options."
        href="#"
        cta="Customize"
        className="row-start-2 col-start-1 col-span-2"
      />
    </BentoGrid>
  );
}
