"use client";

import React from "react";
import { motion } from "framer-motion";

const NoDeals = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100px] p-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto mb-8">
          <circle cx="100" cy="100" r="90" fill="#020617" opacity="0.05" />

          {/* Glasses Frame */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M40 100 H70 C85 100 95 85 95 70 C95 55 85 40 70 40 H40 C25 40 15 55 15 70 C15 85 25 100 40 100 Z"
            fill="none"
            stroke="#020617"
            strokeWidth="3"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M160 100 H130 C115 100 105 85 105 70 C105 55 115 40 130 40 H160 C175 40 185 55 185 70 C185 85 175 100 160 100 Z"
            fill="none"
            stroke="#020617"
            strokeWidth="3"
          />

          {/* Bridge */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            d="M95 70 H105"
            stroke="#020617"
            strokeWidth="3"
          />

          {/* Temple Arms */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M15 70 L5 65 M185 70 L195 65"
            stroke="#020617"
            strokeWidth="3"
          />

          {/* "X" marks */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            d="M45 60 L65 80 M65 60 L45 80 M135 60 L155 80 M155 60 L135 80"
            stroke="#312e81"
            strokeWidth="2"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            No Offers Available
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            We&apos;re currently updating our collection. Check back soon for
            new styles and exclusive deals.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NoDeals;
