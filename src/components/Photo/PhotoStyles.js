import styled from "styled-components";
import { motion } from "framer-motion";

export const PhotoContainer = styled(motion.div)`
animate={{
    x: 0,
    backgroundColor: "#000",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
    transitionEnd: {
      display: "none",
    },
  }}
`;

export const photoTitle = styled(motion.div)`
className="card"
layout`;

export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
`;

export const PhotoImg = styled(motion.img)`
src:${(props) => props.src};
alt:${(props) => props.alt};

`;
