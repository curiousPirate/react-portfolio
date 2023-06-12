import React from "react";
import { ReactComponent as AboutSVG } from "./aboutsvg.svg";
import { ReactComponent as Circle } from "./circle.svg";
import "./about-animation.css";

export default function AboutSvg() {
  return (
    <>
      <AboutSVG className="fixed top-20 -left-10 -z-0" />
      <Circle className="fixed top-20 lg:right-0 -z-0 -lg:z-10 hidden lg:block" />
    </>
  );
}
