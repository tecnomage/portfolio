import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Tenho trabalhado com uma variedade de tecnologias e estou sempre diposto a
      aprender explorar novas ferramentas e aprimorar minhas habilidades para
      enfrentar desafios inovadores e contribuir de maneira significativa para o
      sucesso de projetos e equipes.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" onMouseOver={(e) => {
           e.currentTarget.style.color = '#006BB8';
           e.target.style.transition = '0.3s';
           e.currentTarget.style.transform = 'scale(1.2)';
          }}
           onMouseOut={(e) => {
            e.currentTarget.style.color = '';
            e.target.style.transition = '0.5s';
            e.currentTarget.style.transform = 'scale(1.0)';
            }} />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, Styled Components,JavaScript, React, Angular e Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" 
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#006BB8'
            e.target.style.transition = '0.3s';
            e.currentTarget.style.transform = 'scale(1.2)';
          }} 
          onMouseOut={(e) => {
            e.currentTarget.style.color = ''
            e.target.style.transition = '0.5s';
            e.currentTarget.style.transform = 'scale(1.0)';
            }} />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Spring, Node, Express, Hibernate, JPA, Flask e MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool
           size="5.5rem" 
           onMouseOver={(e) => {
            e.currentTarget.style.color = '#006BB8'
            e.target.style.transition = '0.3s';
            e.currentTarget.style.transform = 'scale(1.2)';
          }} 
          onMouseOut={(e) => {
            e.currentTarget.style.color = ''
            e.target.style.transition = '0.5s';
            e.currentTarget.style.transform = 'scale(1.0)';
            }}
           />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>WordPress CMS, Jira, Trello, Git.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem"
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#006BB8'
            e.target.style.transition = '0.3s';
            e.currentTarget.style.transform = 'scale(1.2)';
          }} 
          onMouseOut={(e) => {
            e.currentTarget.style.color = ''
            e.target.style.transition = '0.5s';
            e.currentTarget.style.transform = 'scale(1.0)';
            }}
          
          />
        </picture>
        <ListContainer>
          <ListTitle>Testes Automatizados</ListTitle>
          <ListParagraph>Jest, JUnit, Spring Boot Test, Mockito.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
