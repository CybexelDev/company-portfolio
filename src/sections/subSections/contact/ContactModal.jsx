import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect } from "react";

const ModalSection = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            className="fixed bottom-0 left-1/2 translate-x-[-50%] backdrop-blur-lg text-white rounded-t-4xl z-50 p-6 shadow-xl"
            style={{
              height: "100vh",
              width: "100vw",
              overflowY: "auto",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4  text-white text-5xl hover:text-black px-1 hover:bg-white rounded-full"
            >
              ×
            </button>

            {/* Contact Form */}
            <motion.div
              className="mt-12 max-w-xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-semibold mb-6 text-center"
              >
                Let's work together
              </motion.h2>

              <motion.p variants={itemVariants} className="text-center mb-8">
                We’d love to hear from you. Fill out the form and we’ll be in touch.
              </motion.p>

              <form className="space-y-6">
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <textarea
                    placeholder="Your message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalSection;
