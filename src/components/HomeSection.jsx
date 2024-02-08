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
    <StyledSection className="home-section-wrapper">
      <SectionContent className="home-section-container">
        <SectionLeft $isText>
          <h1 className="section-heading">
            Whereas disregard and contempt for human rights have resulted
          </h1>
        </SectionLeft>
        <SectionRight>
          <img
            src={bookImg}
            alt="image"
            id="main-image"
            className="section-img"
          />
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default HomeSection;
