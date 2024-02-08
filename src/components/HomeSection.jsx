import bookImg from "../assets/book_1.jpg";
import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";

const HomeSection = () => {
  return (
    <StyledSection>
      <SectionContent>
        <SectionLeft $primary $isText>
          <p>Whereas disregard and contempt for human rights have resulted</p>
        </SectionLeft>
        <SectionRight>
          <img src={bookImg} alt="image" className="section-img" />
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default HomeSection;
