import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contacts = () => {
  // Animation variants for Framer Motion
  const iconVariants = {
    hover: { scale: 1.2, rotate: 90 },
    tap: { scale: 0.9 },
  };

  return (
    <div id="contacts" className="fixed right-4 top-1/3 space-y-8 flex flex-col">
      <motion.a href="https://github.com/rayjim28" 
                className="bg-gray-800 p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap">
        <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
      </motion.a>

      <motion.a href="https://www.linkedin.com/in/raymondjimenez/" 
                className="bg-gray-800 p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap">
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
      </motion.a>

      <motion.a href="mailto:rayjim1986@gmail.com" 
                className="bg-gray-800 p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap">
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl" />
      </motion.a>
    </div>
  );
}

export default Contacts;
