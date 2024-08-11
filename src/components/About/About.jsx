import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/image/archana2.jpeg";
import { aboutdata } from "../../data/data";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="heading">Who I am?</h2>
      <Zoom>
        <Row>
          <Col xs={8} md={8}>
            <p className="info">{aboutdata.intro}</p>
            <p className="info">{aboutdata.description}</p>
            <div>
              <h6>
                <b>Tech Stack</b>
              </h6>
              <img
                src="https://img.icons8.com/ultraviolet/48/000000/react--v1.png"
                alt="react"
              />
              <img
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                alt="js"
              />
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="html"
              />
            </div>
          </Col>
          <Col>
            <img src={image} height="350" width="250" alt="your image" />
          </Col>
        </Row>
      </Zoom>
    </div>
  );
};

export default About;
