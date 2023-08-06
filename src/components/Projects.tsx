import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsData = [
    {
      title: "Movie Mania",
      description: "Movie Mania is a vibrant full-stack MERN application that offers a delightful plunge into the world of cinema. A React-fueled interface, server-side operations handled by Express.js and Node.js, and a MongoDB database blend to create a compelling showcase of modern web development. With Bootstrap delivering style and responsiveness, it integrates third-party APIs for extensive movie data, along with a custom API I developed for JWT authentication. So grab your popcorn and dive in!", 
      image: "/screenshot-of-movies.png",
      link: "https://movie-mania-e7tz.onrender.com/"
    },

    {
      title: "Budget Manager", 
      description: "Welcome to Budget Manager, a financial planning app that's as practical as it is fun. Crafted with a keen eye for detail, this application is all about helping you keep tabs on your budget. Harnessing the power of modern tech, it's the accountant you never knew you needed. Make budgeting a breeze today!", 
      image: "/screenshot-of-budget.png", 
      link: "https://budget-manager-qdrj.onrender.com/"
    }
    
  ];
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
}, [projectsData.length]);

useEffect(() => {
    // Change the project every 30 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, [currentIndex, handleNext]);


  const fadeInOutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="projects" className="py-6 sm:py-12 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl mb-4">Projects</h1>
        <div className="w-full max-w-5xl mx-auto relative">

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] w-full overflow-hidden rounded shadow-md border-2 border-gray-200 bg-white"
                >
                    {/* Buttons to navigate between projects */}
                    <motion.button 
                        onClick={handlePrev} 
                        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-yellow-800 text-white p-2 rounded-r-full"
                        whileHover={{ scale: 1.3 }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="xs" className="sm:text-lg" />
                    </motion.button>
                    
                    <motion.button 
                        onClick={handleNext} 
                        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-green-800 text-white p-2 rounded-l-full"
                        whileHover={{ scale: 1.3 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size="xs" className="sm:text-lg" />
                    </motion.button>

                    {/* Image of the project */}
                    <Image 
                        src={projectsData[currentIndex].image} 
                        alt={projectsData[currentIndex].title} 
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-105" 
                    />
                </motion.div>
            </AnimatePresence>
            {/* Title, Description, and Button OUTSIDE of the card */}
            <div className="mt-6 text-left">
                <h2 className="text-xl font-semibold mb-4">{projectsData[currentIndex].title}</h2>
                <p className="mb-4">{projectsData[currentIndex].description}</p>
                <a href={projectsData[currentIndex].link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Visit Site
                </a>
            </div>
        </div>
    </section>
)
}

export default Projects;