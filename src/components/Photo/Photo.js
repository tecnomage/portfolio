import React from "react";
import { ImgContainer, PhotoContainer, PhotoImg } from "./PhotoStyles";
import { motion } from "framer-motion";

const Photo = ({ photo }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImgContainer>
      <PhotoImg
        src={photo.src}
        alt={photo.alt}
        whileHover={{ scale: 0.8 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [0.8, 1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      ></PhotoImg>
      </ImgContainer>
    </motion.div>
  );
};

export default Photo;
