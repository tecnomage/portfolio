import styled from "styled-components";
import { motion } from "framer-motion";

export const PhotoContainer = styled(motion.div)`
className="card"
layout
whileHover={{ opacity: 1 }}
onClick={() => window.open(photo.url, "_blank")}
`;

export const photoTitle = styled(motion.div)`
className="card"
layout`;

export const PhotoImg = styled(motion.img)`
src:${props => props.src}
alt:${props => props.alt}
initial:{{ width: 100, height: 100 }} // Tamanho inicial
animate:{{ width: 200, height: 200 }} // Tamanho durante a animação
transition:{{ duration: 1 }} // Duração da animação em segundos
`;
