import React from "react";
import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import SpinningLogo from "../SpinningLogo/SpinningLogo";
import { FlexContainer } from "../FlexContainer/FlexContainer";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="what-we-do-content">
        <div className="HalfWidth">
          <SpinningLogo />
        </div>

        <div className="HalfWidth">
          <FlexContainer flexDirection="column">
            <div className="what-we-do-container-text">
              We design and implement clever and user-friendly applications
            </div>

            {/* <div className="container-hire-us">
            <Link to="/contact">
              <div className="container-hire-us-text">HIRE US</div>
            </Link>
          </div> */}
          </FlexContainer>
        </div>
      </div>
      {/* <div className="what-we-do-container">
        <div className="dividiv">
          <div className="what-we-do-container-text">
            We design and implement clever and user-friendly applications
          </div>
        </div>
        <div className="dividiv">
          <div className="what-we-do-underdiv"></div>
        </div>

        <div className="what-we-do-container-text">
            We design and implement clever and user-friendly applications
          </div>
        <div className="container-hire-us">
          <div className="container-hire-us-text">HIRE US</div>
        </div>
      </div> */}
    </div>
  );
};

export default WhatWeDo;
