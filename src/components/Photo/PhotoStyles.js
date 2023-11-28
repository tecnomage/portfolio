import styled from "styled-components";
import { motion } from "framer-motion";

export const PhotoContainer = styled(motion.div)`
width: 300px;
height: 200px;
overflow: hidden;
border: 2px solid #ddd;
border-radius: 8px;
`;

export const photoTitle = styled(motion.div)`
className="card"
layout`;

export const ImgContainer = styled.figure`
  margin: 0;
  display: flex;
    justify-content: center;
    align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
`;

export const PhotoImg = styled(motion.img)`
src:${(props) => props.src};
alt:${(props) => props.alt};

border-radius: 30px;
width: 250px;
height: 250px;
`;
