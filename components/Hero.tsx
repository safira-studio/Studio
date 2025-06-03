import React from "react";
import { Meteors } from "./magicui/meteors";

export default function Hero() {
  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-x-hidden">
      <Meteors />
      <div className="relative h-screen w-full overflow-hidden md:overflow-x-hidden">
        <div className="font-geist-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-fit pointer-events-none whitespace-pre-wrap text-center text-[16rem] font-bold leading-none text-transparent ">
          <span className="mx-auto bg-gradient-to-b from-black to-gray-300/80 bg-clip-text flex flex-col">
            <span className="bg-gradient-to-t from-black to-gray-300/80 bg-clip-text">
              <span className="font-outline text-[20rem] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
                S
              </span>
              afira
            </span>

            {/* <span className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
              <span className="text-[14rem] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
                S
              </span>
              tudio
            </span>*/}
          </span>
          {/* <span className="font-outline  ">Safira Studio</span> */}
        </div>

        <div
          className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex flex-col w-full h-full blur">
            <div
              className="grow"
              style={{
                background:
                  "conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(255, 208, 134) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)",
              }}
            ></div>
            <div
              className="grow"
              style={{
                background:
                  "conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(255, 208, 134) 324deg, rgb(255, 255, 255) 342deg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
