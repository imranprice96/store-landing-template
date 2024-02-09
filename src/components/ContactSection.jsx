import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";
import "../styles/HomeSection.css";
import bookImg from "../assets/svg/books-27.svg";

const ContactSection = () => {
  return (
    <StyledSection $isBody id="contact">
      <SectionContent>
        <SectionLeft></SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <h1 className="section-heading">Contact</h1>
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default ContactSection;
