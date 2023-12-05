import React from "react";
import { useEffect, useState, Suspense } from "react";
import { ImgContainer, PhotoImg } from "./PhotoStyles";
import { motion } from "framer-motion";


export function getStaticProps() {
  const photo = {
    title: "Photo 1",
    src: "images/jpgs/profile.png",
  };

  const teste = {
    title: "Photo 2",
    src: "images/jpgs/profile.png",
  };

  return {
    props: {
      photo,
      teste,
    },
  };
}

const Photo = ({ photo }) => {
  useEffect(() => {
    // Add Framer Motion animations here after the initial render
    // Example:
  }, []);

  return (
    <div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 3.5 }}
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
    </div>
  );
};

export default Photo;

{
  /* <div>
<MotionDiv
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 3.5 }}
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
</MotionDiv>
</div> */
}
