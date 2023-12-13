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
import AboutMe from "../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <Layout>
      <Section grid center>
        <Hero />
        <BgAnimation />
      </Section>
        <AboutMe />
      <Section
        style={{
          marginTop: "50px",
        }}
        id="timeLine"
      > 
      <Timeline />
      </Section>  
       <SoftSkills id="softSkills" />
      <Technologies />
    </Layout>
  );
};

export default Home;
