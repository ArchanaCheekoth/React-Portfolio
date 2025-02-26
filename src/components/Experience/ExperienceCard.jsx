import React from "react";
import Card from "react-bootstrap/Card";
import "./experience.css";

const ExperienceCard = ({ data }) => {
  return (
    <Card
      style={{ width: "25rem", fontFamily: "cursive" }}
      className="shadow-lg p-3 rounded mb-5"
    >
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle>
          {data.subtitle} <br></br>
          {data.duration}
        </Card.Subtitle>
        <Card.Text className="cardtext">{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
