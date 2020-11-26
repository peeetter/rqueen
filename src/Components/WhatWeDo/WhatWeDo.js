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
    config: { mass: 100, tension: 150, friction: 100 },
  });
  return (
    <div className="what-we-do">
      <div className="LeftSide">
        <h1>
          Tailor-made software<br></br> for your business
        </h1>
        <p className="WhatWeDoParagraph">
          In Through the Looking-Glass by Lewis Carroll, the Red Queen is a
          character who needs to keep running in order to stay in the same
          place.
          <br></br> Likewise, we believe that in a world which is changing more
          rapidly than ever, companies need to constantly evolve to keep up with
          their competition. We hold this to be as true for ourselves as for our
          customers, and we constantly strive to make the current project more
          amazing than the last one.
        </p>
        <br></br>
        <Button text="HIRE US" onClick={() => history.push("/contact")} />
      </div>
      <animated.div className="RightSide" style={props}>
        <SpinningLogo />
      </animated.div>
    </div>
  );
};

export default WhatWeDo;
