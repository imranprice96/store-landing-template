import bookImg from "../assets/book_2.jpg";
import "../styles/Hours.css";

import {
  StyledSection,
  SectionContent,
  SectionLeft,
  SectionRight,
} from "./Section.style";

const HoursSection = () => {
  const hours = [
    { day: "Monday", hours: "10 am - 3pm" },
    { day: "Tuesday", hours: "10 am - 3pm" },
    { day: "Wednesday", hours: "10 am - 3pm" },
    { day: "Thursday", hours: "10 am - 3pm" },
    { day: "Friday", hours: "10 am - 3pm" },
    { day: "Saturday", hours: "10 am - 2pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  const hoursList = hours.map((item, index) => (
    <tr key={index}>
      <td>{item.day}</td>
      <td>{item.hours}</td>
    </tr>
  ));

  return (
    <StyledSection>
      <SectionContent>
        <SectionLeft>
          <img src={bookImg} alt="image" className="section-img" />
        </SectionLeft>
        <SectionRight $isText $size="1.5rem">
          <table>{hoursList}</table>
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default HoursSection;
