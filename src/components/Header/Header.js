import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink } from "./HeaderStyles";
import { Link as ScrollLink, Element } from "react-scroll";

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      {route === "/" ? (
        <Div1>
          <span style={{ display: "flex", alignItems: "center" }}>
            Vinicius Braga
          </span>
        </Div1>
      ) : (
        <Div1>
          <Link href="/">
            <a style={{ display: "flex", alignItems: "center" }}>
              Vinicius Braga
            </a>
          </Link>
        </Div1>
      )}
      <Div2>
        <li>
          {/* <Link href={route === "/all-projects" ? "/#about" : "#about"}> */}
          {/* <Link href="#about">
            <NavLink>Sobre </NavLink>
          </Link> */}
          <ScrollLink to="AboutMe" smooth={true} duration={500}>
            <NavLink>Sobre</NavLink>
          </ScrollLink>
        </li>
        <li>
          <a href="#softSkills">
            
            <NavLink>Soft Skills</NavLink> 
          </a>
        </li>
        <li>
          {/* <Link href={route === "/all-projects" ? "/#tech" : "#tech"}> */}
          <Link href={"#tech"}>
            <NavLink>Tecnologias</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#timeLine">
            <NavLink>Timeline</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  );
};

export default Header;
