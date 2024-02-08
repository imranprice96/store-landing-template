import bookImg from "../assets/book_3.png";
import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";
import "../styles/HomeSection.css";

const ContactSection = () => {
  return (
    <StyledSection $isBody id="contact">
      <SectionContent>
        <SectionLeft>
          <img src={bookImg} alt="image" className="section-img" />
        </SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <h1 className="section-heading">Contact</h1>
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default ContactSection;
