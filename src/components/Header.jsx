import styled from "styled-components";
import "../styles/Header.css";
import tm_logo from "../assets/tm_logo.png";

const Header = () => {
  return (
    <StyledNav>
      <StyledList>
        <div className="header-divider">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Location</a>
          </li>
          <li>
            <a>Hours</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </div>

        <div className="header-divider">
          <li>FB_icon</li>
          <li>
            <img src={tm_logo} alt="trade-me" id="tm" />
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
  background-color: #16a34a;
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
