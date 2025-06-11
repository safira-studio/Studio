"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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
  icon,
  totalCards,
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
      className="h-[90vh] flex flex-col lg:flex-row items-center justify-center sticky top-0 z-10"
    >
      <div className="w-1/2">
        <h1 className="text-4xl">Card stacks have never looked so good</h1>
        <p>Just look at it go!</p>
      </div>
      <div>
        <motion.div
          style={{
            scale,
            top,
            left,
            skewY: 6,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[500px] h-[350px] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Border */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${getBorderGradient(i)} rounded-3xl p-[2px]`}
          >
            <div className="w-full h-full bg-gray-900 rounded-3xl">
              {/* Top Tab/Header */}
              <div className="flex items-center gap-2 px-5 py-3 bg-gray-800/50 text-white text-sm border-b border-gray-700/50 rounded-t-3xl">
                {getHeaderIcon(i)}
                <span className="font-semibold">{getTagText(i)}</span>
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
                    <Link
                      href={url ?? "/"}
                      className="text-sm text-green-400 underline hover:text-green-500 transition"
                    >
                      See more
                    </Link>
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
                  <motion.div
                    className="w-full h-full"
                    style={{ scale: imageScale }}
                  >
                    <Image
                      src={`/images/${src}`}
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
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
