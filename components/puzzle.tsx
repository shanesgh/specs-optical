"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const PuzzleComp: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const pieceVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <motion.div
        className="flex h-44 flex-col md:flex-row justify-center items-stretch gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={pieceVariants}
          className="relative flex-1 bg-blue-950 text-white/90 p-6 flex items-center justify-center group hover:bg-blue-900 transition-colors"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-8 bg-blue-950 group-hover:bg-blue-900 transition-colors">
            <div className="absolute inset-0 bg-gray-100 transform translate-x-4">
              <div className="absolute top-0 -left-8 h-16 w-8 bg-blue-950 group-hover:bg-blue-900 transition-colors rounded-l-full" />
            </div>
          </div>
          <span className="text-xl font-semibold">WhatsApp us</span>
        </motion.div>

        <motion.div
          variants={pieceVariants}
          className="relative flex-1 bg-gray-100 text-blue-950 p-6 flex items-center justify-center group hover:bg-gray-200 transition-colors"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-8 bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <div className="absolute inset-0 bg-white/90 transform translate-x-4">
              <div className="absolute top-0 -left-8 h-16 w-8 bg-gray-100 group-hover:bg-gray-200 transition-colors rounded-l-full" />
            </div>
          </div>
          <span className="text-xl font-medium px-2 text-center ">
            to book an appointment
          </span>
        </motion.div>

        <motion.div
          variants={pieceVariants}
          className="relative flex-1 bg-white/90 text-blue-950 p-6 flex items-center justify-center group hover:bg-gray-50 transition-colors space-x-2"
        >
          <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6" />
          <span className="text-xl font-bold tracking-wide text-center">
            363-2484
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-4 space-x-2"
      >
        <div className="w-2 h-2 rounded-full bg-blue-950/20" />
        <div className="w-2 h-2 rounded-full bg-blue-950/40" />
        <div className="w-2 h-2 rounded-full bg-blue-950/60" />
      </motion.div>
    </div>
  );
};

export default PuzzleComp;
