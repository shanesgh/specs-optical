"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HomeTextAnimation } from "@/components/typecomponent";
import specs from "@/public/specs.jpeg";

const AnimatedTest: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 md:p-4 my-6 lg:mx-52 rounded-full">
      <motion.div
        className="relative flex items-center justify-center h-[300px] col-span-2 rounded-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={specs}
          alt="New Image 1"
          className="object-contain h-full rounded-full"
        />
      </motion.div>

      <motion.div
        className="relative flex items-center justify-center bg-blue-950/60 outline-1 sm:col-span-2 sm:row-span-1 ring-1 ring-blue-950 font-bold text-blue-950 h-[60px] mt-4 rounded-br-3xl rounded-bl-3xl lg:text-3xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <HomeTextAnimation />
      </motion.div>
    </div>
  );
};

export default AnimatedTest;
