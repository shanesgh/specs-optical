"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Glasses, Contact, Baby, Droplet } from "lucide-react";
import { GoTools } from "react-icons/go";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Comprehensive Eye Exams",
    description:
      "Regular eye examinations to check vision and overall eye health.",
  },
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "Eyeglass Prescription",
    description: "Determining the correct prescription for eyeglasses.",
  },
  {
    icon: <Contact className="w-8 h-8" />,
    title: "Contact Lens Fitting",
    description: "Providing and fitting contact lenses for customers.",
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatric Eye Care",
    description: "Specialized eye care services for children.",
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Dry Eye Treatment",
    description: "Treatments and management options for dry eye syndrome.",
  },
  {
    icon: <GoTools className="w-8 h-8" />,
    title: "Eyewear Repairs",
    description:
      "Adjusting and repairing eyeglasses to ensure a comfortable fit.",
  },
];

const ServicesGrid: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="lg:px-16">
      <h1 className="text-center text-xl md:text-2xl text-blue-950/90 tracking-widest ">
        A few of the services we provide include
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/90 rounded-xl p-6 shadow-xl flex flex-col items-center text-center"
          >
            <div className="mb-4 text-blue-950">{service.icon}</div>
            <h3 className=" text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
