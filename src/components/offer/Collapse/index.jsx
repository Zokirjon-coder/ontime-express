import React from "react";
import { Conatiner, Collap } from "./styled";
import arrow from "../../../assets/icons/Path 1132.svg";

const Collapse = ({ Collapses }) => {
  const [activeCollapseId, setActiveCollapseId] = React.useState(0);

  const changeCollapse = (id) => {
    activeCollapseId === id ? setActiveCollapseId(0) : setActiveCollapseId(id);
  };
  return (
    <Conatiner>
      {Collapses.map(({ id, title, text }) => (
        <Collap
          key={id}
          active={id === activeCollapseId}
          onClick={() => changeCollapse(id)}
        >
          <div className="header">
            <div className="title">
              <div className="arrow">
                <img src={arrow} alt="arrow" />
              </div>
              {title}
            </div>
            <div className="btn" onClick={() => changeCollapse(id)}>
              {activeCollapseId === id ? "-" : "+"}
            </div>
          </div>
          <div 
          className="body"
          onClick={(e)=>e.stopPropagation()}
          >{text}</div>
        </Collap>
      ))}
    </Conatiner>
  );
};

export default Collapse;
