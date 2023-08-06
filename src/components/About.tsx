import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  FaGlobe,
  FaCandyCane,
  FaFeatherAlt,
  FaMeteor,
  FaPlaneDeparture,
} from "react-icons/fa";

const skillsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.3,
    },
  },
};

const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

type AboutProps = {
  currentTheme: string;
};

const About: React.FC<AboutProps> = ({ currentTheme }) => {
  return (
    <section className="py-12 px-4 text-center relative">
      <div className="w-full max-w-2xl mx-auto relative">
        <motion.div
          className={`mx-auto mb-4 overflow-hidden border-4 ${currentTheme === "light" ? "border-black" : "border-primary"
            } shadow-lg transform transition-transform hover:scale-105 rounded-full w-40 h-40 flex justify-center items-center`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src="/My_picture.png"
            alt="Raymond Jimenez"
            width={150}
            height={150}
            className="rounded-full"
          />
        </motion.div>

        <motion.p
          className="mb-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaGlobe className="inline-block mr-2" /> Hello, World! I graduated
          with flying colors from General Assembly that aren&apos;t just limited
          to primary ones. My toolkit? It&apos;s filled with the power of the
          MERN stack, some Python, and a little Django dance.
        </motion.p>

        <motion.p
          className="mb-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaCandyCane className="inline-block mr-2" /> I jumped into this code
          world after a friend lured me into JavaScript&apos;s magic. Imagine a
          kid in a candy store, but replace candy with coding languages, and
          that&apos;s me!
        </motion.p>

        <motion.p
          className="mb-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <FaFeatherAlt className="inline-block mr-2" /> On off days,
          you&apos;ll catch me concocting side projects, kind of like a
          chef&apos;s version of a midnight snack! When not Googling error
          messages, I&apos;m bonding with family, friends, and my rubber duck
          debugging squad.
        </motion.p>

        <motion.p
          className="mb-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <FaMeteor className="inline-block mr-2" /> In tech, &quot;Learning
          never stops&quot; is an understatement. Take a break, and boom, 300
          new frameworks. But hey, I&apos;m here for the fun, learning, and the
          occasional curveball from the coding universe.
        </motion.p>

        <div className="my-8 border-t border-b border-gray-300 py-6">
          <h3 className="text-3xl mb-4 font-semibold text-white-700">
            Technical Skills
          </h3>
          <motion.ul
            className="space-y-2 text-white-600"
            variants={skillsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={skillVariants} whileHover={{ scale: 1.3 }}>
              JavaScript (ES6+)
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              React &amp; Next.js
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              TailwindCSS &amp; Framer Motion
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              Node.js &amp; Express
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              HTML &amp; CSS
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              BootStrap5 &amp; Materialize
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              Python &amp; Django
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              MongoDB &amp; PostgreSQL
            </motion.li>
            <motion.li variants={skillVariants} whileHover={{ scale: 1.1 }}>
              ...and the list keeps growing!
            </motion.li>
          </motion.ul>
        </div>

        <motion.p
          className="mt-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <FaPlaneDeparture className="inline-block mr-2" /> Beyond the screen,
          I like traveling and meeting new faces. Ready to chat? So am I!
          Let&apos;s create something awesome together.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
