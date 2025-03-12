"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedTextHome: React.FC = () => {
  return (
    <motion.div
      className="text-center mt-8 bg-gray-300 px-2 sm:px-6 md:px-12 w-4/5 py-2 rounded-xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span className="text-sm md:text-md text-wrap  text-blue-950 font-mono track">
        At Specs Optical and Eyewear, we are committed to making fashionable,
        top-notch glasses available to everyone. Our extensive selection
        includes both prescription eyeglasses and sunglasses, designed to
        complement every style and requirement. We offer personalized eye exams
        and expert fittings to ensure your eyewear not only enhances your
        appearance but also provides the best vision possible. With our highly
        available WhatsApp chat, getting the perfect pair of glasses has never
        been easier. From our facility to your home, we strive to fulfill all
        your optical needs with outstanding service.
      </span>
    </motion.div>
  );
};

export default AnimatedTextHome;
