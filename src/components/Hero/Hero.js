import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo <br />
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          O propósito do meu portfólio é oferecer uma visão abrangente sobre
          quem eu sou e destacar minhas habilidades.<br/> Fique à vontade para entrar
          em contato e iniciar uma conversa. Estou disponível para discutir
          colaborações, responder a perguntas ou fornecer mais detalhes sobre
          meu trabalho.
          <br />
          Sinta-se à vontade para entrar em contato.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
