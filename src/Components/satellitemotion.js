import { ReactComponent as Satellite } from "../design/satellite.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function SatelliteMotion() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.set(".satellite", { scale: 1, autoAlpha: 1 });

    gsap.to(".satellite", {
      duration: 5,
      ease: "power1.inOut",
      immediateRender: true,
      motionPath: {
        path: "#satellite-path",
        align: "#satellite-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      },
      repeat: -1,
    });

  }, []);

  return (
      <Satellite />
  );
}

export default SatelliteMotion;