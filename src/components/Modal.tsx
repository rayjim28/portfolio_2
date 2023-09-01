import { motion } from "framer-motion"; // Import motion for animations
import { useTheme } from "next-themes"; // Import useTheme hook to handle theme
import { useEffect } from "react"; // Import useEffect for side-effects

// Define the ModalProps interface with onClose and children properties
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    const { theme } = useTheme(); // Get the current theme (dark or light)
    const isDark = theme === "dark"; // Determine if the theme is dark

    // useEffect to disable scrolling when the modal is open and re-enable it on unmount
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    // Define animation variants for the modal
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.7 },
    };

    return (
        // Outer div for the modal overlay with flex centering and semi-transparent background
        <div className="fixed inset-0 z-[1000] overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
            {/* Animated modal container with conditional styling based on the theme */}
            <motion.div
                className={`relative p-8 w-full max-w-lg rounded-lg shadow-2xl flex flex-col space-y-4 transition-all font-sans text-lg ${isDark ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
                    }`}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ fontFamily: '"Roboto", sans-serif' }} // Font style
            >
                {/* Close button with absolute positioning */}
                <button
                    onClick={onClose} // Calls the onClose function when clicked
                    className="absolute top-4 right-4 cursor-pointer flex flex-col items-center hover:text-gray-700 transition-all transform hover:scale-110"
                >
                    {/* SVG icon for close button */}
                    <svg
                        className={
                            isDark ? "fill-current text-white" : "fill-current text-black"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path d="M18 1.3L16.7 0 9 7.7 1.3 0 0 1.3 7.7 9 0 16.7 1.3 18 9 10.3l7.7 7.7 1.3-1.3L10.3 9z"></path>
                    </svg>
                    <span className="text-xs"></span> {/* Empty span for optional text */}
                </button>
                {/* Main content area of the modal, flex centering and scrollable */}
                <div className="flex flex-col items-center space-y-4 overflow-y-auto max-h-[calc(100vh-10rem)] sm:max-h-[400px]">
                    {children} {/* Renders the children passed to the Modal component */}
                </div>
            </motion.div>
        </div>
    );
};

export default Modal; // Export the Modal component
