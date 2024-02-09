import styled from "styled-components";

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  height: 250px;
  background-color: var(--green-primary);

  @media (prefers-color-scheme: dark) {
    background-color: black;
  }
`;
