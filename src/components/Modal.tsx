import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from 'react';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.7 }
    };

    return (
        <div className="absolute inset-0 z-[1000] overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
                className={`relative p-8 w-full max-w-lg rounded-lg shadow-2xl flex flex-col space-y-4 transition-all font-sans text-lg ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ fontFamily: '"Roboto", sans-serif' }} // Add the font family here
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer flex flex-col items-center hover:text-gray-700 transition-all transform hover:scale-110"
                >
                    <svg
                        className={isDark ? "fill-current text-white" : "fill-current text-black"}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path d="M18 1.3L16.7 0 9 7.7 1.3 0 0 1.3 7.7 9 0 16.7 1.3 18 9 10.3l7.7 7.7 1.3-1.3L10.3 9z"></path>
                    </svg>
                    <span className="text-xs"></span>
                </button>
                <div className="space-y-4 overflow-y-auto max-h-[400px]">{children}</div> {/* Scrollable content */}
            </motion.div>
        </div>
    );
};

export default Modal;
