import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/image/coverimage.jpeg";
import { Typewriter } from "react-simple-typewriter";
import "./header.css";
import { homedata } from "../../data/data";
import CircleButton from "../CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <section
      className="home"
      id="home"
      style={{ backgroundColor: "#1f293a", color: "#fff" }}
    >
      <Container>
        <Row>
          <Col md={6} sm={4} className="home-content">
            <h5 className="mb-2">{homedata.intro}</h5>
            <h1 className="mb-3 name">{homedata.name}</h1>
            <h3 className="mb-4">
              I Am{" "}
              <span className="text-primary">
                <Typewriter
                  words={homedata.tech}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <button className="outline-button" onClick={toggleContactInfo}>
              Get in Touch
            </button>
            <button
              className="outline-button m-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "src/assets/Archana-C-Resume.pdf"; // Replace with the actual file name
                link.download = "Archana-C-Resume.pdf"; // Replace with the desired file name
                link.click();
              }}
            >
              Resume
            </button>
            {showContactInfo && (
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span> +91 6238875353 </span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span> archanacheekoth97@gmail.com </span>{" "}
                </div>
              </div>
            )}
          </Col>
          <Col className="home-pic" md={6} sm={4}>
            <img src={image} height={100} alt="Program" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Header;
