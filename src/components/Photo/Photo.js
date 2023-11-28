import React from "react";
import { ImgContainer, PhotoContainer, PhotoImg } from "./PhotoStyles";
import { motion } from "framer-motion";

const Photo = ({ photo }) => {
 
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: -0.8, opacity: 0 }}
      transition={{ duration: 7.5 }}
    >
      <PhotoImg src={photo.src} alt={photo.alt}></PhotoImg>
    </motion.div>
  );
};

export default Photo;


