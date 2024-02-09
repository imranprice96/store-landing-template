import bookImg from "../assets/svg/books-27.svg";
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
          <img src={bookImg} alt="" className="section-img" />
        </SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <h1 className="section-heading">Location</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default LocationSection;
