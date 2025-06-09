"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url?: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  tag?: string;
  icon?: React.ReactNode;
}

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  tag = "Customizable",
  icon,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Calculate initial top and right values
  const initialTop = `calc(-5vh + ${i * 50}px)`;
  const initialLeft = `0px`;

  // const top = useTransform(progress, range, [initialTop, "-50px"]);
  const left = useTransform(progress, range, [initialLeft, "500px"]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 z-10 border border-red-500"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: initialTop,
          left,
          skewY: 6,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[700px] max-w-[90vw] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 border-green-500"
      >
        {/* Top Tab/Header */}
        <div className="flex items-center gap-2 px-5 py-3 bg-black text-white text-sm border-b border-neutral-800">
          {icon || <span className="text-lg">⚙️</span>}
          <span className="font-semibold">{tag}</span>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row gap-6 h-full p-6">
          {/* Description Section */}
          <div className="w-full md:w-[45%] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <a
                href={url}
                target="_blank"
                className="text-sm text-green-400 underline hover:text-green-500 transition"
              >
                See more
              </a>
              <svg
                width="20"
                height="10"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[55%] rounded-2xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={`/images/${src}`}
                alt="image"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
