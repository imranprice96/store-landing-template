import styled from "styled-components";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import LogoSVG from "../assets/svg/logo";

const Header = () => {
  return (
    <StyledNav>
      <StyledList>
        <div className="header-divider">
          <li>
            <a href="#home">
              <i style={{ color: "white" }}>
                <LogoSVG width="4rem" height="4rem" />
              </i>
            </a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#hours">Hours</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>

        <div className="header-divider">
          <li>
            <a>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faStore} />
            </a>
          </li>
        </div>
      </StyledList>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: var(--green-primary);
  height: 75px;
`;

const StyledList = styled.ul`
  width: 980px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;
