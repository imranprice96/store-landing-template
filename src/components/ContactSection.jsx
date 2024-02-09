import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
  SectionInner,
} from "./Section.style";
import "../styles/HomeSection.css";
import bookImg from "../assets/book_6.png";

const ContactSection = () => {
  return (
    <StyledSection $isBody id="contact">
      <SectionContent>
        <SectionLeft>
          <img src={bookImg} alt="" className="section-img" />
        </SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <h1 className="section-heading">Contact</h1>
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

export default ContactSection;
