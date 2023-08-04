import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsData = [
    { title: "Movie Mania", description: "An immersive movie database experience, Movie Mania is a full-stack web application crafted using the MERN stack. With MongoDB as its backend data store, Express.js and Node.js handling server-side operations, and React bringing the frontend to life, the application is a testament to the power and efficiency of modern web development. Alongside core web technologies like JavaScript and CSS, Bootstrap ensures a responsive and visually appealing user experience. Users can dive deep into a plethora of movie data, sourced from third-party APIs, offering rich information and diverse movie listings. Additionally, the platform integrates a custom-built API, showcasing the versatility and extendibility of the system. Explore, search, and lose yourself in the world of films.", image: "/screenshot-of-movies.png", link: "https://movie-mania-e7tz.onrender.com/" },
    { title: "Budget Manager", description: "Description for project 2", image: "/screenshot-of-budget.png", link: "https://budget-manager-qdrj.onrender.com/" },
    // ... Add more projects as needed
  ];

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
}, [projectsData.length]);

useEffect(() => {
    // Change the project every 10 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);

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
                        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-full"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="xs" className="sm:text-lg" />
                    </motion.button>
                    
                    <motion.button 
                        onClick={handleNext} 
                        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-full"
                        whileHover={{ scale: 1.1 }}
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