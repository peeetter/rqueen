import React from "react";
import "./WhatWeDo.css";
import SpinningLogo from "../SpinningLogo/SpinningLogo";
import { useSpring, animated } from "react-spring";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const WhatWeDo = () => {
  let history = useHistory();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  });
  return (
    <div className="what-we-do">
      <div className="what-we-do-content">
        <div className="LeftSide">
          <h1>Tailor-made software for your business</h1>
          <p>
            In Through the Looking-Glass by Lewis Carroll, the Red Queen is a
            character who has to keep running just to stay in the same place.
            <br></br> Likewise, we believe that in a world that is more rapidly
            changing than ever, companies have to constantly evolve just to keep
            up with its competition.<br></br> We hold this to be as true for
            ourselves as for our customers, and we constantly strive to make the
            current project more amazing than the last one.
          </p>
          <br></br>
          <Button text="HIRE US" onClick={() => history.push("/contact")} />
        </div>
        <animated.div className="RightSide" style={props}>
          <SpinningLogo />
        </animated.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
