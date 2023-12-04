import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Photo from "../Photo/Photo";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const img = {
    title: "Photo 1",
    src: "images/jpgs/profile.png",
  };

  const [img2, setimg2] = useState({});

  useEffect(() => {
    setimg2({
      title: "Photo 2",
      src: "images/jpgs/profile.png",
    });
  }, []);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Bem-vindo <br />
          </SectionTitle>

          <Photo photo={img}></Photo>

          <SectionText style={{ paddingBottom: 0 }}>
            O propósito do meu portfólio é oferecer uma visão abrangente sobre
            quem eu sou e destacar minhas habilidades.
            <br /> Fique à vontade para entrar em contato e iniciar uma
            conversa. Estou disponível para discutir colaborações, responder a
            perguntas ou fornecer mais detalhes sobre meu trabalho.
            <br />
            Sinta-se à vontade para entrar em contato.
          </SectionText>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
