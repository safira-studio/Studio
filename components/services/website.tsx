import React from "react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { Cover } from "../ui/cover";

export default function WebsiteContent() {
  return (
    <div className=" m-auto h-full text-2xl md:text-5xl">
      <span>
        Make your websites look 10x{" "}
        <ContainerTextFlip
          words={["better", "modern", "beautiful", "awesome"]}
        />{" "}
        <br />
        at <Cover>warp speed</Cover>
      </span>
    </div>
  );
}
