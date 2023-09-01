import { useState, useEffect } from "react"; // Importing React hooks for managing state and side effects
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import About from "../components/About"; // Importing the About component
import Projects from "../components/Projects"; // Importing the Projects component
import Contacts from "../components/contacts"; // Importing the Contacts component
import Link from "next/link"; // Importing Next.js Link component for client-side navigation
import Particles from "../components/Particles"; // Importing a custom Particle component for the background
import { useTheme } from "next-themes"; // Importing a hook to handle the website's themes
import { RiMoonFill, RiSunLine } from "react-icons/ri"; // Importing icons to be used for the theme toggle button
import CustomCursor from "../components/CustomCursor"; // Importing a custom cursor component

// Defining the navigation items with their names and links
const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

// The main functional component for the Home page
export default function Home() {
  const [isHoveringTitle, setIsHoveringTitle] = useState(false); // State for tracking whether the user is hovering over the title
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme(); // Using the useTheme hook to get system theme, current theme, and setTheme function
  const currentTheme: string =
    theme === "system" ? systemTheme || "dark" : theme || "dark"; // Calculating the current theme, including handling system preferences

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
        }
      });
    }, options);

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      });
    }, options);

    const projectsElement = document.querySelector("#projects");
    const aboutElement = document.querySelector("#about");

    if (projectsElement) {
      projectsObserver.observe(projectsElement);
    }

    if (aboutElement) {
      aboutObserver.observe(aboutElement);
    }

    return () => {
      if (projectsElement) {
        projectsObserver.unobserve(projectsElement);
      }
      if (aboutElement) {
        aboutObserver.unobserve(aboutElement);
      }
    };
  }, []);

  useEffect(() => {
    setTheme("dark"); // Always set to dark theme on load
  }, [setTheme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Defining an array of quotes to display on the page
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "The biggest risk is not taking any risk.",
      author: "Mark Zuckerberg",
    },
    {
      text: "The only thing standing between you and your goal is the story you keep telling yourself.",
      author: "Tony Robbins",
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
  ];

  // State for tracking the index of the currently displayed quote
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Using useEffect to change the displayed quote every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Incrementing the current quote index by one or resetting to zero if at the end
    }, 10000);
    return () => clearInterval(interval); // Cleaning up the interval when the component unmounts
  }, [quotes.length]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Main render method
  return (
    <motion.div
      className={`relative flex flex-col min-h-screen justify-between ${
        currentTheme === "light" ? "bg-light-background" : "bg-dark-background"
      } w-full`}
      initial={{ opacity: 0, scale: 0.9, y: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Particle background component */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={3000}
        theme={currentTheme || "dark"}
      />
      {/* Header section */}
      <header
        className={`container mx-auto px-4 py-2 flex flex-wrap justify-between items-center mt-4 ${
          currentTheme === "light" ? "text-dark-primary" : "text-light-primary"
        }`}
      >
        {/* Main title for the header */}
        <h2
          className={`text-xl sm:text-3xl font-semibold ${
            !currentTheme || currentTheme === "dark"
              ? "text-white"
              : "text-black"
          }`}
        >
          Hello, World! 🌎
        </h2>
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          {/* Home link */}
          <Link
            href="/"
            className={`hover:text-yellow-500 transition text-2xl duration-300 ${
              !currentTheme || currentTheme === "dark"
                ? "text-white"
                : "text-black"
            }`}
          >
            Home
          </Link>
          {/* Theme toggle button */}
          {!currentTheme || currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2 rounded-xl flex items-center"
            >
              <RiSunLine size={35} color="white" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="p-2 rounded-xl flex items-center"
            >
              <RiMoonFill size={35} color="black" />
            </button>
          )}
        </div>
      </header>
      {/* Main content section */}
      <main
        className={`flex flex-col justify-center items-center h-full relative z-10 mb-36 ${
          currentTheme === "light" ? "text-dark-primary" : "text-light-primary"
        }`}
      >
        {/* Animated div containing navigation and main content */}
        <motion.div
          className="flex flex-col items-center justify-center w-11/12 sm:w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Navigation section */}
          <motion.nav className="my-4 sm:my-8">
            <ul className="flex items-center justify-center gap-40 text-xl">
              {navigation.map((item) => (
                <motion.div key={item.href} whileHover={{ scale: 1.2 }}>
                  <Link
                    href={item.href}
                    className={`text-2xl duration-500 border-b-2 pb-1 border-current hover:text-yellow-500 ${
                      !currentTheme || currentTheme === "dark"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </ul>
          </motion.nav>
          {/* Main title */}
          <motion.h1
            onMouseEnter={() => setIsHoveringTitle(true)}
            onMouseLeave={() => setIsHoveringTitle(false)}
            className={`z-10 mt-24 text-center w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display whitespace-normal ${
              currentTheme === "light" ? "bg-black" : "bg-white"
            } bg-clip-text`}
            whileHover={{ scale: 1.1 }}
          >
            Raymond Jimenez: Software Engineer & Data Enthusiast.
            <br />
            Passionate about developing software and diving into data.
            <br />
            Skilled in <strong>SQL</strong> and keen to optimize queries to
            glean insights.
            <br />
            On a journey of learning, growth, and adding value through tech.
            {isHoveringTitle && <CustomCursor />}
          </motion.h1>

          {/* Quote section */}
          <div className="quote-container mt-24">
            <motion.h2
              className={`text-xl md:text-xl lg:text-3xl text-center mt-24 ${
                !currentTheme || currentTheme === "dark"
                  ? "text-white"
                  : "text-black"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {quotes[currentQuoteIndex].text} <br />{" "}
              {quotes[currentQuoteIndex].author}
            </motion.h2>
          </div>
        </motion.div>
      </main>
      {/* Projects component section */}
      <motion.div
        id="projects"
        className="relative z-10 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isProjectsVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Projects currentTheme={currentTheme} />
      </motion.div>

      {/* About component section */}
      <motion.div
        id="about"
        className="relative z-10 mt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAboutVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <About currentTheme={currentTheme} />
      </motion.div>

      {/* Contacts component section */}
      <div id="contacts" className="relative z-10">
        <Contacts theme={currentTheme} />
      </div>
    </motion.div>
  );
}
