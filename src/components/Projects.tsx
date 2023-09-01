import React, { useState, useRef } from "react";
import Image from "next/image";
import Modal from "./Modal"; // Import your Modal component
import { motion, useAnimation } from "framer-motion";

interface ProjectsProps {
  currentTheme: string;
}

const Projects = ({ currentTheme }: ProjectsProps) => {
  const isDark = currentTheme === "dark";
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  const projectsRef = useRef<HTMLElement | null>(null);

  const controls = useAnimation();

  // An array containing the project data
  const projectsData: ProjectType[] = [
    // First project details
    {
      title: "Portfolio",
      description:
        "Welcome to my portfolio, a comprehensive showcase of my journey in the tech world. Here, you'll find a collection of projects that I've worked on, reflecting my passion for coding, creativity, and problem-solving. Dive into the details to explore my skills in various technologies and methodologies. Whether it's front-end, back-end, or full-stack development, I invite you to explore the pieces that make up my professional identity.",
      image: "/screenshot-of-portfolio.png",
      link: "https://raymond-jimenez.com/",
      theme: "dark",
    },
    // Second project details
    {
      title: "Movie Mania",
      description:
        "Movie Mania is a vibrant full-stack MERN application that offers a delightful plunge into the world of cinema. A React-fueled interface, server-side operations handled by Express.js and Node.js, and a MongoDB database blend to create a compelling showcase of modern web development. With Bootstrap delivering style and responsiveness, it integrates third-party APIs for extensive movie data, along with a custom API I developed for JWT authentication. So grab your popcorn and dive in!",
      image: "/screenshot-of-movie-mania.png",
      link: "https://movie-mania-e7tz.onrender.com/",
      theme: "light",
    },
    // Third project details
    {
      title: "Budget Manager",
      description: "Welcome to Budget Manager...",
      image: "/screenshot-of-budget.png",
      link: "https://budget-manager-qdrj.onrender.com/",
      theme: "dark",
    },
    // Fourth project details
    {
      title: "Gradebook",
      description: "Welcome to Gradebook...",
      image: "/screenshot-of-gradebook.png",
      link: "https://student-gradebook.onrender.com/",
      theme: "light",
    },
  ];

  // Define a type for the project
  type ProjectType = {
    title: string;
    description: string;
    image: string;
    link: string;
    theme: string;
  };

  const handleShowModal = (project: ProjectType) => {
    setCurrentProject(project);
    setShowModal(true);
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
      backgroundColor: isDark ? "#333" : "#eee",
      border: "1px solid black"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      backgroundColor: "#555",
    }, //
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative py-6 sm:py-12 px-4 text-center mt-1.5"
    >
      <h1 className="text-2xl sm:text-4xl mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            className="rounded-lg shadow-md border-2 bg-[color] p-4 transition-all cursor-pointer"
            onClick={() => handleShowModal(project)}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <div className="flex flex-col items-center">
              {" "}
              {/* Centered content */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
              />
              <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && currentProject && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={modalVariants}
          transition={{ type: "spring", damping: 15 }}
        >
          <Modal onClose={() => setShowModal(false)}>
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
            >
              Visit Site
            </a>
            <h2 className="text-2xl mb-2">{currentProject.title}</h2>
            <Image
              src={currentProject.image}
              width={300}
              height={200}
              alt={currentProject.title}
            />
            <p className="mt-2">{currentProject.description}</p>
          </Modal>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
