import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-slate-900 border-0 transition ease transform duration-300`;
  const closeMenu = () => {
    setIsNavOpen(false);
    document.getElementById("menu").classList.add("hideMenuNav");
  };

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    document.getElementById("menu").classList.toggle("hideMenuNav");
  };

  return (
    <div className="fixed w-full z-50 flex items-center justify-between bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl text-black py-2 px-10 sm:px-16 top-0">
      <img
        src={require("../design/logo.png")}
        className="w-18.08 h-20"
        alt="logo"
      />
      <nav>
        <section className="flex">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={toggleMenu}
            style={{ zIndex: 20 }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>

          <ul
            id="menu"
            className={`flex flex-col items-center justify-between min-h-[250px] ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <div className="border-4 border-white border-l-green-500 p-6">
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                  <a href="./transitions/index6.html" id="home">
                    Home
                  </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <Link
                  to="projects"
                  smooth={true}
                  offset={-200}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <Link
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <Link
                  to="get-in-touch"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Get in Touch!
                </Link>
              </li>
            </div>
          </ul>
        </section>
      </nav>
      <style>{`
.hideMenuNav { 
  display: none; 
} 
.showMenuNav { 
  display: block; 
  position: absolute; 
  width: 100%; 
  height: 100vh; 
  top: 0; 
  left: 0; 
  background-color: white; 
  z-index: 10;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
  color: white; 
} 
`}</style>
    </div>
  );
}
