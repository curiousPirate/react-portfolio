import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../design/logo.svg";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-teal-500 border-0 border-solid transition ease transform duration-200`;
  const closeMenu = () => {
    setIsNavOpen(false);
    document.getElementById("menu").classList.add("hideMenuNav");
  };

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    document.getElementById("menu").classList.toggle("hideMenuNav");
  };

  return (
    <div className="w-full z-50 flex items-center justify-between bg-[#020617] py-2 pr-20 pl-10 sm:pr-28 top-0">
      <Link to="/" id="home">
        <Logo className="w-18.08 h-20 cursor-pointer" />
      </Link>
      <nav>
        <section className="flex">
          <button
            className="flex flex-col h-12 w-16 bg-[#102a43] rounded justify-center items-center group fixed top-6"
            onClick={toggleMenu}
            style={{ zIndex: 1000 }}
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
            className={`flex flex-col items-center justify-between min-h-[250px]  ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <div className="border-4 border-transparent border-l-teal-500 p-6">
              <li className="text-4xl cursor-pointer">
                <Link
                  to="/"
                  id="home"
                  className="px-4 py-2 text-white hover:text-teal-500 animate-[fade-in_1s_ease-in-out]"
                  onClick={closeMenu}
                >
                  &lt; Home &gt;
                </Link>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <Link
                  to="/about"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  &lt; About &gt;
                </Link>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <Link
                  to="/projects"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  &lt; Projects &gt;
                </Link>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <Link
                  to="/contact"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  &lt; Get In Touch! &gt;
                </Link>
              </li>
              <li className="flex justify-around">
                <Link
                  to="https://github.com/curiousPirate"
                  title="GitHub"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    style={{ color: "#ffffff" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/chaitanya-varmag/"
                  title="LinkedIn"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    style={{ color: "#0077b5" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
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
  position: fixed;
  width: 100%; 
  height: 100vh; 
  top: 0; 
  left: 0;
  z-index: 999;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
}
`}</style>
    </div>
  );
}
