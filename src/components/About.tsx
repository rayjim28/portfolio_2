import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  FaGlobe,
  FaCode,
  FaLaptopCode,
  FaBookOpen,
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
            } shadow-lg transform transition-transform hover:scale-105 flex justify-center items-center`}
          style={{ width: '130px', height: '180px' }}
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
            src="/my_picture.png"
            alt="Raymond Jimenez"
            width={130}
            height={150}
          />
        </motion.div>

        <motion.p
          className="mb-6 leading-relaxed text-white-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaGlobe className="inline-block mr-2" /> Hello, World! I graduated from General Assembly, where I honed my skills in a diverse array of technologies. My toolkit encompasses the robust MERN stack, Python, and the Django framework.
        </motion.p>

        <motion.p className="mb-6 leading-relaxed text-white-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <FaCode className="inline-block mr-2" /> My passion for coding was ignited through the captivating world of JavaScript. Every new project is an opportunity for growth, innovation, and achieving excellence.
        </motion.p>

        <motion.p className="mb-6 leading-relaxed text-white-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <FaLaptopCode className="inline-block mr-2" /> Off-screen, I engage in side projects that allow me to explore new technologies and methodologies. When not coding, I value spending quality time with family and friends and investing in personal development.
        </motion.p>
        <motion.p className="mb-6 leading-relaxed text-white-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <FaBookOpen className="inline-block mr-2" /> The technology landscape is ever-changing, and I am committed to continuous learning. Staying up-to-date with the latest trends and frameworks is not just a necessity but a dedication to my craft.
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

        <motion.p className="mt-6 leading-relaxed text-white-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <FaPlaneDeparture className="inline-block mr-2" /> Beyond the world of code, I have a zest for traveling and connecting with new people. I&apos;m always open to discussing new opportunities and collaborating on exciting projects. Let&apos;s build something remarkable together.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
