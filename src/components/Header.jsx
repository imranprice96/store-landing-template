import styled from "styled-components";
import "../styles/Header.css";

const Header = () => {
  return (
    <StyledNav>
      <StyledList>
        <div className="header-divider">
          <li>*</li>
          <li>Home</li>
          <li>Hours</li>
          <li>Contact</li>
        </div>

        <div className="header-divider">
          <li>FB_icon</li>
          <li>Tradme_icon</li>
        </div>
      </StyledList>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #16a34a;
  height: 4rem;
`;

const StyledList = styled.ul`
  width: 980px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 1.5rem;
`;
