import React from "react";
import { Container } from "./styled";
import { icons } from "./icons";

const Footer = ({name}) => {
  return (
    <Container name={name}>
      <div className="footerContainer">
        {icons.map(({ id, img }) => (
          <div className="icon" id={id} key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      
      <div className="footerContainer">
        {icons.map(({ id, img }) => (
          <div className="icon" id={id} key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Footer;
