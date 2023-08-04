import { motion } from "framer-motion";
import About from '../components/About';
import Projects from '../components/Projects'; 
import Contacts from '../components/contacts';
import Link from 'next/link';
import Particles from "../components/Particles";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const navigation = [
	{ name: "Projects", href: "#projects" },
	{ name: "About", href: "#about" },
];

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative bg-gradient-to-tl from-black via-zinc-600/20 to-black min-h-screen w-full">
      {/* Particles background */}
      <Particles className="absolute inset-0 -z-10" quantity={2000} />

      {/* The integrated components */}
      <header className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center mt-4">
        <h2 className={`text-xl sm:text-2xl font-semibold ${!currentTheme || currentTheme === "dark" ? "text-white" : "text-black"}`}>Hello, World! 🌎</h2>
        <div className="flex space-x-6 mt-2 sm:mt-0">
          <Link href="/" className={`hover:text-gray-600 transition duration-300 ${!currentTheme || currentTheme === "dark" ? "text-white" : "text-black"}`}>
            Home
          </Link>
          {(!currentTheme || currentTheme === "dark") ? (
            <button onClick={() => setTheme("light")} className="p-2 rounded-xl">
              <RiSunLine size={25} color="white" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="p-2 rounded-xl">
              <RiMoonFill size={25} color="black" />
            </button>
          )}
        </div>
      </header>

      <main className="flex flex-col justify-center items-center h-4/5 relative z-10 mb-36">
        <motion.div 
          className="flex flex-col items-center justify-center w-11/12 sm:w-full h-4/5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.nav className="my-4 sm:my-8">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <motion.div key={item.href} whileHover={{ scale: 1.1 }}>
                  <Link href={item.href} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300" passHref>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </ul>
          </motion.nav>

          <motion.h1
            className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-normal bg-clip-text"
            whileHover={{ scale: 1.1 }}
          >
      Hi, my name is Raymond,<br />& I&apos;m a Software Engineer👨🏻‍💻
    </motion.h1>
  </motion.div>
</main>

      {/* Projects section */}
      <div id="projects" className="relative z-10 mt-16">
        <Projects />
      </div>

      {/* About section */}
      <div id="about" className="relative z-10 mt-16">
        <About />
      </div>

      {/* Contacts section */}
      <div id="contacts" className="relative z-10">
        <Contacts />
      </div>
    </div>
  );
};
