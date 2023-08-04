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
 <div className="relative bg-gradient-to-tl from-black via-zinc-600/20 to-black min-h-screen max-w-screen-2xl mx-auto">

 {/* Particles background */}
 <Particles className="absolute inset-0 -z-10" quantity={2000} />

   {/* The integrated components */}
   <header className="container mx-auto px-4 py-2 flex justify-between items-center mt-4">
        <h2 className={`text-2xl font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}>Hello, World! 🌎</h2>
        <div className="flex space-x-6">
          <Link href="/" className={`hover:text-gray-600 transition duration-300 ${currentTheme === "dark" ? "text-white" : "text-black"}`}>
            Home
          </Link>
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
      </header>

      <main className="flex flex-col justify-center items-center h-screen relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center w-full h-screen"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.nav className="my-16">
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
            className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
            whileHover={{ scale: 1.1 }}
          >
            Raymond Jimenez
          </motion.h1>

          <div className="my-16 text-center animate-fade-in">
            <motion.h2 
              className="text-sm text-zinc-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hi, my name is Raymond, and I&apos;m a Software Engineer 👨🏻‍💻
            </motion.h2>
          </div>
        </motion.div>
      </main>

     {/* Projects section */}
      <div id="projects" className="relative z-10">
        <Projects />
      </div>

     {/* About section */}
      <div id="about" className="relative z-10">
        <About />
      </div>

     {/* Contacts section */}
      <div id="contacts" className="relative z-10">
        <Contacts />
      </div>
    </div>
  );
};
