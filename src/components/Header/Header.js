import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink } from "./HeaderStyles";
import { Link as ScrollLink } from "react-scroll";

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
          <ScrollLink to="AboutMe" smooth={true} duration={500}>
            <NavLink>Sobre</NavLink>
          </ScrollLink>
        </li>
       
        <li>
          <Link href="#softSkills">
            <NavLink href="#softSkills">Soft Skill</NavLink>
          </Link>
        </li>
        <li>
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
