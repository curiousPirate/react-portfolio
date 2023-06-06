import { ReactComponent as Smile } from "./intro.svg";
import "./intro-animation.css";

export default function Smiles() {
  return <Smile className="absolute lg:left-0 -left-10 w-1/2 lg:w-1/6 sm:w-6/12 md:w-1/4" style={{ zIndex: 0 }} />;
}
