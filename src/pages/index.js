import { Layout } from "../layout/Layout";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../styles/GlobalComponents";
// import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import SoftSkills from "../components/SofSkills/SoftSkills";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <Layout>
      <Section grid center>
        {/* //TODO mudar o texto apresentado nesse hero */}
        <Hero />
        {/* //TODO colocar uma foto minha aqui */}
        <BgAnimation />
      </Section>
      <Section>
      <SectionDivider divider />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Olá, sou um desenvolvedor Full Stack apaixonado por tecnologia, com
          mais de 8 anos de experiência em programação.Durante minha carreira,
          tive a oportunidade de trabalhar em uma variedade de projetos
          desafiadores e inovadores, que vão desde aplicações web até soluções
          de software complexas.
        </SectionText>
        <SectionText>
          Tive a oportunidade de liderar projetos do início ao fim e conhecer a
          fundo todas as etapas do ciclo de vida do desenvolvimento de software.
          Estou confortável trabalhando tanto no front-end quanto no back-end,
          sendo capaz de criar interfaces de usuário intuitivas e responsivas,
          bem como arquitetar e implementar soluções de back-end robustas. Minha
          experiência abrange várias tecnologias, incluindo [JavaScript, React,
          Node.js, Python, Django, entre outras.]
        </SectionText>
        <SectionText>
          Estou sempre procurando expandir minhas habilidades e enfrentar novos
          desafios. Portanto, estou atualmente em busca de novas oportunidades
          onde possa aplicar minhas habilidades existentes e continuar crescendo
          como profissional na área de TI. Se sua equipe precisa de um
          desenvolvedor Full Stack experiente, dedicado e apaixonado por
          resolver problemas e criar soluções eficientes, adoraria ter a
          oportunidade de discutir como posso contribuir para seus projetos.
          Estou ansioso para trazer minha experiência, compromisso e paixão para
          sua empresa.
        </SectionText>
      </Section>
      <Section 
      style={{
        marginTop: "100px",
      }}
      id="timeLine">
        <Timeline />
      </Section>
      <SoftSkills />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;

// TODO1
// Criar um Component About me