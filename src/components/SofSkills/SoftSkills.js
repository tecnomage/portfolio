import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { GridContainer } from "../Projects/ProjectsStyles";
import  SoftSkillCard  from "../Cards/SoftSkillCard";
import { softSkills } from "../../constants/constants";

const SoftSkills = () => {
  return (
    <Section id='softSkills'>
      <SectionDivider divider />
      <SectionTitle>Soft Skills</SectionTitle>
      <GridContainer>
        {softSkills
          .sort((a, b) => a.order - b.order)
          .map((card) => (
            // console.log(card)
             <SoftSkillCard item={card} key={card.id}/>
          ))
          
          //indica quantos itens serão exibidos  
          .slice(0, 3)}
      </GridContainer>
    </Section>
  );
};

export default SoftSkills;
