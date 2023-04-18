import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ItemNav = styled.li`
  text-decoration: none;
  display: inline-block;
  color: #333;
  /* padding: 20px 30px; */
  /* width: 150px; */
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    background-position: right center;
  }
`;

export const NavBarLink = styled(NavLink)`
  display: inline-block;
  color: gold;
  padding: 15px;
  width: 150px;
  text-align: center;
  font-size: 20px;
`;
