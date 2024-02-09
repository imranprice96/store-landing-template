import bookImg from "../assets/book_4.jpg";
import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";
import "../styles/HomeSection.css";

const HomeSection = () => {
  return (
    <StyledSection className="home-section-wrapper" id="home">
      <SectionContent className="home-section-container">
        <SectionLeft $isText>
          <h1 className="section-heading">Heading text</h1>
          <p>Whereas disregard and contempt for human rights have resulted</p>
        </SectionLeft>
        <SectionRight>
          <img src={bookImg} alt="image" id="main-image" />
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default HomeSection;
