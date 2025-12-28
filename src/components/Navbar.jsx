import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary dark:bg-dark-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto pr-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-text dark:text-dark-white-100 text-[18px] font-bold cursor-pointer flex">
            Nate&nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden lg:flex flex-row gap-6 ml-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-text dark:text-dark-white-100"
                  : "text-text dark:text-dark-secondary"
              } hover:text-text dark:hover:text-dark-white-100 text-[14px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer invert dark:invert-0"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-50 dark:bg-dark-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-2xl border-2 border-gray-300 dark:border-dark-secondary`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title
                      ? "text-black dark:text-dark-white-100 font-bold"
                      : "text-gray-700 dark:text-dark-secondary"
                  } font-medium cursor-pointer text-[16px] hover:text-black dark:hover:text-dark-white-100 transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
