import "../styles/Section.css";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: auto;
  background-color: ${(props) =>
    props.$isBody ? "var(--section-bg-light)" : "inherit"};

  padding: ${(props) => (props.$isBody ? "5rem 0 5rem 0" : "0")};
  margin: 0 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: ${(props) =>
      props.$isBody ? "var(--section-bg-dark)" : "inherit"};
  }
`;

export const SectionContent = styled.div`
  width: 980px;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
`;

export const SectionLeft = styled.div`
  width: ${(props) => (props.$isText ? "50%" : "50%")};
  padding: ${(props) => (props.$isText ? "1rem" : "0")};
  font-size: ${(props) => (props.$size ? props.$size : "inherit")};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  line-height: 3rem;
`;

export const SectionInner = styled.div`
  width: 100%;
  padding: ${(props) => (props.$isText ? "1rem" : "0")};
  font-size: ${(props) => (props.$size ? props.$size : "inherit")};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  line-height: 3rem;
`;

export const SectionRight = styled.div`
  width: ${(props) => (props.$isText ? "50%" : "50%")};
  padding: ${(props) => (props.$isText ? "1rem" : "0")};
  font-size: ${(props) => (props.$size ? props.$size : "inherit")};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  line-height: 3rem;
`;
