import React from "react";
import{PhotoImg} from './PhotoStyles';
import { motion } from "framer-motion";

const Photo = ({ photo }) => {
   console.log(photo);
  //TODO1 - FAZER A PHOTO FICAR ROUNDED
  return (
  
  <PhotoImg src={photo.src} alt={photo.alt} ></PhotoImg>
  
  );
};

export default Photo;
