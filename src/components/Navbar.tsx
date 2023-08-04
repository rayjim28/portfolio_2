import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const navVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  return (
    <motion.header
      className={`fixed w-full px-4 top-0 left-0 shadow-md z-50 ${currentTheme === "dark" ? "bg-black" : "bg-white"}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h2 className={`text-2xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}>Hello World! 🌎</h2>
        <div className="flex space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={`#${item.page}`}
              smooth={true}
              duration={500}
              className={`hover:text-gray-600 transition duration-300 ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              {item.label}
            </Link>
          ))}
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")} className="p-2 rounded-xl">
                <RiSunLine size={25} color="white" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="p-2 rounded-xl">
                <RiMoonFill size={25} color="black" />
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
