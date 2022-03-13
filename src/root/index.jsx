import React, { useEffect, useState, useRef } from "react";
import { Container, Wrapper, Navigation } from "./styled";
import Header from "../components/Generic/header";
import Footer from "../components/Generic/footer";
import { dataSections } from "../utils/dataSections";
import quoteImg from '../assets/icons/Group 613.svg'

const Root = () => {
  const [hash, setHash] = useState("home");
  const [shown, setShown] = useState("home");
  const [activeDropDown, setActiveDropDown] = useState(false);

  const wrapper = useRef(null);
  
  // Navigation Sections start
  
  const changeDirection = () =>
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView();
      }
    }, 200);

  const changeSection = (section) => {
    setHash(section);
    changeDirection();
  };

  useEffect(() => {
    changeDirection();
    console.log(window.innerWidth);
  }, [hash]);

  useEffect(() => {
    const sections = wrapper.current.querySelectorAll("section");
    wrapper.current.addEventListener("scroll", (e) => {
      const scrollY = e.srcElement.scrollTop;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("id");
          if (sectionId !== shown) {
            setShown(sectionId);
          }
        }
      });
    });
  }, [shown]);

  useEffect(() => {
    shown && setActiveDropDown(false);
  }, [shown]);

  // Navigation Sections end

  return (
    <Wrapper ref={wrapper}>
      <Navigation action={String(activeDropDown)}>
        <Navigation.Buttons action={String(activeDropDown)}>
          {dataSections.map(({ name, id, hidden }) => hidden && (
            <span
              title={name}
              key={id}
              style={{
                borderColor: shown === name ? "var(--main-color)" : "black",
              }}
              onClick={() => changeSection(name)}
            ></span>
          ))}
        </Navigation.Buttons>
        <div className="quote">
          <img src={quoteImg} alt="quote" onClick={() => changeSection('quote')} />
        </div>
      </Navigation>
      {dataSections.map(({ id, name, background, section: Section }) => (
        <Container
          secName={name}
          bg={activeDropDown ? 'var(--bg-dark)' : background}
          key={id}
          weiwed={shown === name}
          id={name}
          action={String(activeDropDown)}>
          <div className="header">
            <Header
              action={[activeDropDown, setActiveDropDown]}
              color={activeDropDown ? 'var(--bg-dark)' : background}
              name={name}
              changeSection={changeSection} />
          </div>
          <Section action={activeDropDown} changeSection={changeSection} />
          {!activeDropDown && <Footer name={name} />}
        </Container>
      ))}
    </Wrapper>
  );
};

export default Root;
