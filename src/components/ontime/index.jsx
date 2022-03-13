import React from "react";
import { dataOntimePage } from "../../mock/dataOntimePage";
import { Conatiner } from "./styled";

const OntimePage = ({action}) => {
  return (
    <Conatiner action={String(action)}>
      {!action&&<Conatiner.Banner>
        <div className="left">
          <div className="content">
            <h1>
              WHY DRIVE <br /> WITH ONTIME?
            </h1>
            <p>
              Ontime Express Company is committed to improving the quality of
              life for our drivers and their families by providing the best
              equipment, superior pay, high-quality benefits, and ensuring
              efficient operations and load planning that allow them to maximize
              their home life without sacrificing safety or income.
            </p>
            <p>
              Ontime Express might promise the same benefits as other companies,
              but it actually delivers.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="contents">
            {
              dataOntimePage.map(({ id, number, text }) => (

                <div className="content" key={id}>
                  <div className="number">
                    {number}</div>
                  <div className="text">
                    {text}
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(OntimePage);
