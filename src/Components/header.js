import { useState } from "react";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-black border-0 transition ease transform duration-300`;
  const closeMenu = () => {
    setIsNavOpen(false);
    document.getElementById("menu").classList.add("hideMenuNav");
  };

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    document.getElementById("menu").classList.toggle("hideMenuNav");
  };

  return (
    <div className="fixed w-full z-50 flex items-center justify-between bg-white text-black py-2 px-10 sm:px-16 top-0">
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
            className={`flex flex-col items-center justify-between min-h-[250px] ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <div
              className="border-4 border-transparent border-l-slate-600 p-6"
              style={{
                backgroundImage: `url("./design/nav.avif")`,
              }}
            >
              <li className="text-4xl cursor-pointer">
                <a
                  href="/"
                  id="home"
                  className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-black hover:bg-slate-500 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <a
                  href="/projects"
                  className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-black hover:bg-slate-500 hover:text-white"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <a
                  href="/about"
                  className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-black hover:bg-slate-500 hover:text-white"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer text-slate-900">
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-black hover:bg-slate-500 hover:text-white"
                  onClick={closeMenu}
                >
                  Get in Touch!
                </a>
              </li>
              <li className="text-4xl cursor-pointer">
                <a
                  href="./transitions/index6.html"
                  id="home"
                  className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-black hover:bg-slate-500 hover:text-white"
                >
                  Test
                </a>
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
  color: white;
}
`}</style>
    </div>
  );
}
