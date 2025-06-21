import { CpuIcon, GlobeIcon, ShieldCheckIcon, RocketIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Terminal, TypingAnimation } from "@/components/magicui/terminal"; // adjust path if needed
import { CardStack } from "./ui/card-stack";

export function BentoDemo() {
  return (
    <BentoGrid>
      {/* Box 1 */}
      <BentoCard
        Icon={GlobeIcon}
        name="Advanced AI Algorithms"
        description="Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs."
        href="#"
        cta="Explore"
        className="row-start-1 col-start-1"
      />

      {/* Box 2 */}
      <BentoCard
        Icon={ShieldCheckIcon}
        name="Secure Data Handling"
        description="We prioritize your data security with encryption and strict privacy protocols."
        href="#"
        cta="Learn More"
        className="row-start-1 col-start-2"
      />

      {/* Box 3 with Terminal */}
      <BentoCard
        Icon={CpuIcon}
        name="Seamless Integration"
        description={
          <>
            <p>
              Easily integrate our AI solutions into your existing workflows and
              systems.
            </p>
            <div className="mt-4">
              <Terminal>
                <div className="text-left space-y-1">
                  <TypingAnimation
                    delay={0}
                    className="text-green-500"
                    as="div"
                  >
                    ➜ heroui init my-app
                  </TypingAnimation>
                  <TypingAnimation
                    delay={1000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Preflight checks.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={2000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Verifying framework. Found Next.js.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={3000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Validating Tailwind CSS.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={4000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Validating import alias.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={5000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Writing components.json.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={6000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Checking registry.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={7000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Updating tailwind.config.ts
                  </TypingAnimation>
                  <TypingAnimation
                    delay={8000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Updating app/globals.css
                  </TypingAnimation>
                  <TypingAnimation
                    delay={9000}
                    className="text-green-500"
                    as="div"
                  >
                    ✔ Installing dependencies.
                  </TypingAnimation>

                  <TypingAnimation
                    delay={10000}
                    className="text-blue-400"
                    as="div"
                  >
                    ℹ Updated 1 file:
                  </TypingAnimation>
                  <TypingAnimation delay={11000} as="div">
                    - lib/utils.ts
                  </TypingAnimation>

                  <TypingAnimation
                    delay={12000}
                    className="text-gray-400"
                    as="div"
                  >
                    Success! Project initialization completed.
                  </TypingAnimation>
                  <TypingAnimation
                    delay={13000}
                    className="text-gray-400"
                    as="div"
                  >
                    You may now add components.
                  </TypingAnimation>
                </div>
              </Terminal>
            </div>
          </>
        }
        href="#"
        cta="Get Started"
        className="row-span-2 col-start-3 max-sm:hidden"
        order="order-last lg:order-none"
      />

      {/* Box 4 */}
      <BentoCard
        Icon={RocketIcon}
        name="Customizable Solutions"
        description={
          <>
            <p className="mb-4 text-sm text-neutral-400 pb-7">
              Tailor our AI services to your specific needs with flexible
              customization options.
            </p>
            <CardStack
              items={[
                {
                  id: 1,
                  name: "Client A",
                  designation: "E-commerce AI Integration",
                  content:
                    "Deployed AI chatbots and recommender systems for Shopify.",
                },
                {
                  id: 2,
                  name: "Client B",
                  designation: "Healthcare AI Tools",
                  content:
                    "Automated report generation and diagnostics workflows.",
                },
                {
                  id: 3,
                  name: "Client C",
                  designation: "Web3 & Security",
                  content:
                    "Implemented smart contract audits and SOC monitoring.",
                },
              ]}
            />
          </>
        }
        href="#"
        cta="Customize"
        className="row-start-2 col-start-1 col-span-2"
      />
    </BentoGrid>
  );
}
