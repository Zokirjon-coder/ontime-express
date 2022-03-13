import React from "react";
import { Conatiner } from "./styled";
import Collapse from "./Collapse";
import { dataOffer } from "../../mock/dataOffer";
import arrow from "../../assets/icons/Path 1132.svg";

const OfferPage = ({action}) => {
  return (
    <Conatiner>
      <Conatiner.Watermark>
        <h1>ontime</h1>
        <h1>express</h1>
      </Conatiner.Watermark>
      {!action&&<Conatiner.Banner>
        <div>
          <h2>truck driving jobs we offer</h2>
          <div className="content">
            <div className="collapse">
              <Collapse Collapses={dataOffer} />
            </div>
            <div className="lists">
              <h2>
                {" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>{" "}
                REGIONAL DRY VAN SOLO
              </h2>
              <div className="ul">
                <div className="li">$0.75 - $0.85 CPM</div>
                <div className="li">24/7 Friendly Dispatch</div>
                <div className="li">24/7 Tech Support</div>
                <div className="li">24/7 ELD Service</div>
                <div className="li">Dedicated Lanes</div>
                <div className="li">Drop and Hook Loads</div>
                <div className="li">Direct Deposit Every Friday</div>
              </div>
              <div className="btn">
                <button className="outline">APPLY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(OfferPage);
