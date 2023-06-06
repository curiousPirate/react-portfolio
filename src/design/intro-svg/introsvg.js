import { ReactComponent as Intro } from "./bg.svg";
import './animation.css';


export default function Intros () {
  return <Intro className="fixed top-0 left-200" style={{ zIndex: 0 }} />;
};