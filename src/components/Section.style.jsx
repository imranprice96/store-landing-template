import "../styles/Section.css";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SectionContent = styled.div`
  width: 980px;
  height: 540px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;

export const SectionLeft = styled.div`
  width: ${(props) => (props.$isText ? "40%" : "50%")};
  font-size: ${(props) => (props.$size ? props.$size : "inherit")};
`;

export const SectionRight = styled.div`
  width: ${(props) => (props.$isText ? "40%" : "50%")};
  font-size: ${(props) => (props.$size ? props.$size : "inherit")};
`;
