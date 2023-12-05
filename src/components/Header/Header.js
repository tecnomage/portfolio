import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink } from "./HeaderStyles";

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
          <Link href="#AboutMe">
            <NavLink>Sobre</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#softSkills">
            <NavLink>SoftSkills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Tecnologias</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#timeLine">
            <NavLink>TimeLine</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  );
};

export default Header;
