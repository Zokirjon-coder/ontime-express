import React, { useState } from "react";
import { Container } from "./styled";
import { icons } from "./icons";
import About from "./about";
import Menu from "./menu";


const Header = ({ color, name, changeSection, action }) => {
  const [activeDropDown, setActiveDropDown] = action;
  const [type, setType] = useState(null);
  const openDropDown = (type) => {
    setActiveDropDown(true);
    setType(type);
  }
  const light = color === 'var(--bg-light)';
  return (
    <Container action={String(activeDropDown)} name={name} color={color}>
      <div className="container">
        <div className="logo" title="home" onClick={() => changeSection('home')}>
          <img src={light ? icons('darkLogo') : icons('lihgtLogo')} alt="logo" />
        </div>
        <div className="menu">
          <div className="item" onClick={() => changeSection('join')}>
            <div className="menuLogo">
              <img src={icons('driverApp')} alt="" />
            </div>
            <div className="firstmenu menuName">Driver application</div>
          </div>
          <div className="item">
            <div className="menuLogo">
              <a disabled={activeDropDown} href="tel: + 1 (937) 360-8005"><img src={icons('call')} alt="" /></a>
            </div>
            <a disabled={activeDropDown} href="tel: + 1 (937) 360-8005"><div className="menuName">Call</div></a>
          </div>
          <div className="item" onClick={() => changeSection('quote')}>
            <div className="menuLogo">
              <img src={icons('quote')} alt="" />
            </div>
            <div className="menuName">Get Quote</div>
          </div>
          <div className="item" onClick={() => openDropDown('about')}>
            <div className="menuLogo">
              <img src={icons('about')} alt="" />
            </div>
            <div className="menuName">About Us</div>
          </div>
          <div className="item humburgerMenu" onClick={() => openDropDown('menu')}>
            <div className="menuLogo">
              <img src={icons('hamburger')} alt="" />
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="link">
            <img src={!light ? icons('light_telegram') : icons('dark_telegram')} alt="" />
          </div>
          <div className="link">
            <img src={!light ? icons('light_facebook') : icons('dark_facebook')} alt="" />
          </div>
          <div className="link">
            <img src={!light ? icons('light_instagram') : icons('dark_instagram')} alt="" />
          </div>
          <div className="link">
            <img src={!light ? icons('light_linkedIn') : icons('dark_linkedIn')} alt="" />
          </div>
        </div></div>
      <About type={type} action={[activeDropDown, setActiveDropDown]} />
      <Menu dropType={[type, setType]} changeSection={changeSection} action={[activeDropDown, setActiveDropDown]} />
    </Container>
  );
};

export default React.memo(Header);
