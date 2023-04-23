import { ReactComponent as UFO } from "../design/ufo.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function UFOMotion() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.set(".ufo", { scale: 1, autoAlpha: 1 });

    gsap.to(".ufo", {
      duration: 5,
      ease: "power1.inOut",
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
    });
  }, []);

  return <UFO />;
}

export default UFOMotion;
