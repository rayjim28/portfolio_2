import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type ContactsProps = {
  theme: string;
}

const Contacts: FunctionComponent<ContactsProps> = ({ theme }) => { // Accept theme as a prop
  // Choose icon color based on theme
  const iconColor = theme === 'light' ? 'text-black' : 'text-white'; // Change 'text-black' to 'text-white' if you want the icons to be white in light theme
  const bgColor = theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'; // Use lighter background for light theme

  // Animation variants for Framer Motion
  const iconVariants = {
    hover: { scale: 1.2, rotate: 90 },
    tap: { scale: 0.9 },
  };

  return (
    <div id="contacts" className="fixed right-4 top-1/3 space-y-8 flex flex-col">
      <motion.a href="https://github.com/rayjim28"
        className={`${bgColor} p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1`}
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap">
        <FontAwesomeIcon icon={faGithub} className={`${iconColor} text-3xl`} /> {/* Use dynamic icon color */}
      </motion.a>

      <motion.a href="https://www.linkedin.com/in/raymondjimenez/"
        className={`${bgColor} p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1`}
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap">
        <FontAwesomeIcon icon={faLinkedin} className={`${iconColor} text-3xl`} /> {/* Use dynamic icon color */}
      </motion.a>

      <motion.a href="mailto:rayjim1986@gmail.com"
        className={`${bgColor} p-5 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg transform hover:-translate-y-1`}
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap">
        <FontAwesomeIcon icon={faEnvelope} className={`${iconColor} text-3xl`} /> {/* Use dynamic icon color */}
      </motion.a>
    </div>
  );
}

export default Contacts;
