import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsData = [
    { title: "Movie Mania", description: "Description for project 1", image: "/screenshot-of-movies.png", link: "https://movie-mania-e7tz.onrender.com/" },
    { title: "Budget Manager", description: "Description for project 2", image: "/screenshot-of-budget.png", link: "https://budget-manager-qdrj.onrender.com/" },
    // ... Add more projects as needed
  ];

  useEffect(() => {
    // Change the project every 5 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const fadeInOutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  return (
    <section id="projects" className="py-12 px-4 text-center">
    <h1>Projects</h1>
    <div className="w-full max-w-5xl mx-auto relative">
      <motion.button 
        onClick={handlePrev} 
        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-2 bg-gray-800 text-white p-4 rounded-r-full"
        whileHover={{ scale: 1.1 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> {/* Font Awesome Left Arrow */}
      </motion.button>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          variants={fadeInOutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative h-[500px] w-full overflow-hidden rounded shadow-lg border border-gray-300" // Adjusted height for portrait look
        >
            <Image 
              src={projectsData[currentIndex].image} 
              alt={projectsData[currentIndex].title} 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div>
        </motion.div>
      </AnimatePresence>

      <motion.button 
        onClick={handleNext} 
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-2 bg-gray-800 text-white p-4 rounded-l-full"
        whileHover={{ scale: 1.1 }}
      >
        <FontAwesomeIcon icon={faArrowRight} /> {/* Font Awesome Right Arrow */}
      </motion.button>
      
      <div className="mt-6">
          <h2 className="text-2xl mb-4">{projectsData[currentIndex].title}</h2>
          <p className="mb-4">{projectsData[currentIndex].description}</p>
      </div>
    </div>
  </section>
)
}

export default Projects;
