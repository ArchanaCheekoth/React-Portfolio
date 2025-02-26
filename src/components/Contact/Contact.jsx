import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./contact.css";
import CircleButton from "../CircleButton/CircleButton";

const Contact = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section className="contact" id="contact">
      <h2
        className="text-center heading mb-0"
        style={{ fontFamily: "cursive" }}
      >
        {" "}
        &nbsp; Connect me on.
      </h2>
      <h5 className="mb-2">Fell free to connect on these sites.</h5>
      <div className="icon-button-container">
        <CircleButton
          icon={faLinkedinIn}
          onClick={() => handleClick("https://www.linkedin.com/in/c-archana/")}
        />
        <CircleButton
          icon={faEnvelope}
          onClick={() =>
            handleClick(
              "mailto:archanacheekoth97@gmail.com?subject=Your%20Subject%20Here&body=Your%20Body%20Here"
            )
          }
        />
      </div>
    </section>
  );
};

export default Contact;
