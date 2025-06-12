"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Settings, Settings2 } from "lucide-react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url?: string;
  color: string;
  progress: any;
  tag?: string;
  icon?: React.ReactNode;
  totalCards: number;
  topGradient?: boolean;
  gradientAngle?: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  tag = "Customizable",
  icon = <Settings2 />,
  totalCards,
  topGradient = false,
  gradientAngle = 0,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const range = [i / totalCards, 1];
  const targetScale = 1 - (totalCards - i) * 0.03;
  const finalTop = `${(i - (totalCards - 1)) * 50}px`;
  const finalLeft = `${(totalCards - 1 - i) * 80}px`;

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const top = useTransform(progress, range, ["0px", finalTop]);
  const left = useTransform(progress, range, ["0px", finalLeft]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex flex-col lg:flex-row items-center justify-center sticky top-0 z-10"
    >
      <div className="top-1/2 absolute lg:top-1/3 ">
        <motion.div
          style={{
            scale,
            top,
            left,
            skewY: 6,
            transformStyle: "preserve-3d",
          }}
          className="relative w-80 h-72 md:w-[400px] md:h-[320px] lg:w-[500px] lg:h-[400px] rounded-medium overflow-hidden shadow-2xl border border-white bg-black"
        >
          <div className="flex items-center justify-start gap-2 px-3 w-full h-10 shadow-md relative border-b border-white ">
            <>
              <div
                className="absolute top-0 left-0 w-full h-full -z-10"
                style={{
                  background: `conic-gradient(
        from ${topGradient ? `80deg at 0% 0%` : "86deg at 0% 100%"},
        transparent 0%,
        #FFD086BD 1%,
        #FFFFFFFF 2%,
        #FFD086BD 3%,
        transparent 4%
      )`,
                }}
              />
              <div
                className="absolute top-0 right-0 w-full h-full -z-10"
                style={{
                  background: `conic-gradient(
        from ${topGradient ? `266deg at 100% 0%` : "259deg at 100% 100%"},
        transparent 0%,
        #FFD086BD 1%,
        #FFFFFFFF 2%,
        #FFD086BD 3%,
        transparent 4%
      )`,
                }}
              />
            </>

            {icon}
            <span className="text-gray-300 text-sm font-medium">{tag}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;

// Define gradient border colors based on card index
const getBorderGradient = (index: number) => {
  const gradients = [
    "from-blue-500 via-purple-500 to-green-400", // Reliable
    "from-green-400 via-blue-500 to-purple-500", // Smooth
    "from-purple-500 via-green-400 to-blue-500", // Customizable
  ];
  return gradients[index % gradients.length];
};

const getHeaderIcon = (index: number) => {
  const icons = [
    <svg
      key="reliable"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400"
    >
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      key="smooth"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-green-400"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>,
    <svg
      key="customizable"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-purple-400"
    >
      <path
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];
  return icons[index % icons.length];
};

const getTagText = (index: number) => {
  const tags = ["Reliable", "Smooth", "Customizable"];
  return tags[index % tags.length];
};
