import React from "react";
import Card from "react-bootstrap/Card";

const EducationCard = ({ data }) => {
  return (
    <Card className="shadow-lg p-3 rounded mb-5">
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text className="college mb-0">{data.college}</Card.Text>
        <Card.Text className="year mb-3">{data.duration}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
