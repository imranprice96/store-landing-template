import bookImg from "../assets/book_2.jpg";
import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";
import "../styles/HomeSection.css";

const LocationSection = () => {
  return (
    <StyledSection $isBody id="location">
      <SectionContent>
        <SectionLeft>
          <img src={bookImg} alt="image" className="section-img" />
        </SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <h1 className="section-heading">Location</h1>
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default LocationSection;
