// Import necessary dependencies
import React, { useState, useEffect, useCallback } from 'react'; // React hooks
import Image from 'next/image'; // Next.js image component
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for icons
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Specific FontAwesome icons

// Define the Projects functional component
const Projects = () => {

  // State to keep track of the current project index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to control showing the project description
  const [showDescription, setShowDescription] = useState(false);

  // An array containing the project data
  const projectsData = [
    // First project details
    {
      title: "Movie Mania",
      description: "Movie Mania is a vibrant full-stack MERN application that offers a delightful plunge into the world of cinema. A React-fueled interface, server-side operations handled by Express.js and Node.js, and a MongoDB database blend to create a compelling showcase of modern web development. With Bootstrap delivering style and responsiveness, it integrates third-party APIs for extensive movie data, along with a custom API I developed for JWT authentication. So grab your popcorn and dive in!",
      image: "/screenshot-of-movies.png",
      link: "https://movie-mania-e7tz.onrender.com/"
    },
    // Second project details
    {
      title: "Budget Manager",
      description: "Welcome to Budget Manager...",
      image: "/screenshot-of-budget.png",
      link: "https://budget-manager-qdrj.onrender.com/"
    }
  ];

  // Function to set the previous project as current
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  // Function to set the next project as current, memoized with useCallback
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }, [projectsData.length]);

  // useEffect to set up an interval to automatically switch to the next project every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 30000); // 30-second interval
    return () => clearInterval(intervalId); // Clean-up function
  }, [currentIndex, handleNext]);

  // Variants for the Framer Motion animations (not used in the code, but here for potential customization)
  const fadeInOutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };
  
  // Other potential variants for animations
  const cardVariants = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } };
  const textVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };

  // JSX for the component rendering
  return (
    <section id="projects" className="py-6 sm:py-12 px-4 text-center">
      <h1 className="text-2xl sm:text-4xl mb-4">Projects</h1> {/* Header */}
      <div className="w-full max-w-5xl mx-auto relative">

        <AnimatePresence mode="wait"> {/* AnimatePresence wrapper to control enter/exit animations */}
          <motion.div
            key={currentIndex} // Key to enable smooth transition between projects
            initial={{ opacity: 0, x: -100 }} // Initial state for animation
            animate={{ opacity: 1, x: 0 }} // Final state for animation
            exit={{ opacity: 0, x: 100 }} // Exit state for animation
            transition={{ duration: 0.6 }} // Transition settings
            className="relative h-[400px] w-full overflow-hidden rounded shadow-md border-2 border-gray-200 bg-white"
            onMouseEnter={() => setShowDescription(true)} // Show description on mouse enter
            onMouseLeave={() => setShowDescription(false)} // Hide description on mouse leave
          >
            {/* Previous button */}
            <motion.button onClick={handlePrev} className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-yellow-800 text-white p-2 rounded-r-full" whileHover={{ scale: 1.3 }}>
              <FontAwesomeIcon icon={faArrowLeft} size="xs" className="sm:text-lg" /> {/* Left arrow icon */}
            </motion.button>

            {/* Next button */}
            <motion.button onClick={handleNext} className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-green-800 text-white p-2 rounded-l-full" whileHover={{ scale: 1.3 }}>
              <FontAwesomeIcon icon={faArrowRight} size="xs" className="sm:text-lg" /> {/* Right arrow icon */}
            </motion.button>

            {/* Project image */}
            <Image src={projectsData[currentIndex].image} alt={projectsData[currentIndex].title} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />

            {/* Project details section */}
            <div className={`absolute bottom-0 left-0 w-full p-4 text-white transition-all duration-300 ${showDescription ? "bg-black bg-opacity-70 shadow-lg" : "bg-black bg-opacity-0"}`}>
              <h2 className="text-xl font-semibold mb-2">{projectsData[currentIndex].title}</h2> {/* Project title */}
              {showDescription && <p className="mb-2 opacity-100 transition-all duration-300">{projectsData[currentIndex].description}</p>} {/* Project description */}
              {/* Link to project */}
              <a href={projectsData[currentIndex].link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Visit Site
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// Export the Projects component
export default Projects;
