import React from "react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { Cover } from "../ui/cover";

export default function WebsiteContent() {
  return (
    <div className=" m-auto h-full text-2xl md:text-5xl p-5 text-clip text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 ">
      <span>
        Make your websites look 10x{" "}
        <ContainerTextFlip
          words={["better", "modern", "beautiful", "awesome"]}
        />{" "}
        <br />
        at <Cover className="text-white">warp speed</Cover>
      </span>
    </div>
  );
}
