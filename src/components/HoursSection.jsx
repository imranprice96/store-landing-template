import "../styles/HoursSection.css";
import bookImg from "../assets/book_7.png";

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
    <span key={index} className="hours-row">
      <h3>{item.day}</h3>
      <p>{item.hours}</p>
    </span>
  ));

  return (
    <StyledSection $isBody id="hours">
      <SectionContent>
        <SectionLeft $isText $size="1.5rem">
          <h1 className="section-heading">Hours</h1>
          <ul id="hoursList">{hoursList}</ul>
        </SectionLeft>
        <SectionRight>
          <img src={bookImg} alt="" className="section-img" />
        </SectionRight>
      </SectionContent>
    </StyledSection>
  );
};

export default HoursSection;
