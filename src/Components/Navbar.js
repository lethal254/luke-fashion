import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeadersH1, HeadersH2 } from "../Elements/typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge } from "@material-ui/core";

const NavBar = styled.nav`
  height: 8vh;
  background-color: ${(props) => props.theme.primaryBackgrounds};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  opacity: ${(props) => (props.opacify ? 0.9 : 1)};
  transition: all 1s ease;
`;
const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;
const NavContentLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => (props.opacify ? "inherit" : "black")};
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    padding: 0.2rem 1rem;
  }
`;

const NavContentRight = styled.ul`
  display: flex;
  align-items: center;
`;
const NavLink = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  cursor: pointer;
  border-radius: 0.7rem;
  transition: all 0.5s ease;
  padding: 1rem;
  :hover {
    background-color: ${(props) => props.theme.lightBackgrounds};
  }
`;

export default function Navbar() {
  const [opacify, handleOpacify] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleOpacify(true);
      } else handleOpacify(false);
    });
    return () => {
      window.removeEventListener("scroll", false);
    };
  }, []);
  return (
    <NavBar opacify={opacify}>
      <NavContent>
        <NavContentLeft>
          <Logo opacify={opacify}>
            <HeadersH1 color={opacify ? "dark" : "light"}>LUKU</HeadersH1>
          </Logo>
        </NavContentLeft>
        <NavContentRight>
          <NavLink>
            <HeadersH2>Home</HeadersH2>
          </NavLink>
          <NavLink>
            <HeadersH2>CheckOut</HeadersH2>
          </NavLink>
          <NavLink>
            <Badge showZero badgeContent={0} overlap='circle' color='secondary'>
              <AddShoppingCartIcon style={{ fontSize: "3rem" }} />
            </Badge>
          </NavLink>
        </NavContentRight>
      </NavContent>
    </NavBar>
  );
}
