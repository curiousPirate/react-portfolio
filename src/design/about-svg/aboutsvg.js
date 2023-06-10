import React from "react";
import { ReactComponent as AboutSVG } from "./aboutsvg.svg";
import { ReactComponent as Circle } from "./circle.svg";
import "./about-animation.css";

export default function AboutSvg() {
  return (
    <>
      <AboutSVG className="fixed top-0 -left-10" style={{ zIndex: 0 }} />
      <Circle className="fixed top-0 -right-10 lg:right-0" style={{ zIndex: 0 }} />
    </>
  );
}
