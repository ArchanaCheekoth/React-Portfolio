import React from "react";
import { Container } from "react-bootstrap";
import EducationCard from "./EducationCard";
import "./education.css";
import { educationdata } from "../../data/data";

const Education = () => {
  return (
    <section className="education-content" id="education">
      <Container>
        <h2
          className="text-center heading mb-5"
          style={{ fontFamily: "cursive" }}
        >
          &nbsp; Education Details
        </h2>

        {educationdata.map((data) => (
          <div className="timeline" key={data.id}>
            <div className="container-e left-container">
              <div className="timeline-bullet"></div>
              <EducationCard data={data} />
              <span className="left-container-arrow"></span>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Education;
