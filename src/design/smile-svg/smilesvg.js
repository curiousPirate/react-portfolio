import { ReactComponent as Smile } from "./intro.svg";
import "./intro-animation.css";

export default function Smiles() {
  return <Smile className="fixed top-0 left-200" style={{ zIndex: 0 }} />;
}
