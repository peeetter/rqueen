import React from "react";
import "./Home.css";
import SpinningLogo from "../SpinningLogo/SpinningLogo";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 50, tension: 150, friction: 100 },
  });
  return (
    <div className="what-we-do">
      <div className="LeftSide">
        <h1>Skräddarsydda IT-system</h1>
        <p>
          Sinkas din organisation av manuella processer?<br></br> Låt oss hjälpa
          till! Vi bygger smarta, användarvänliga system med hjälp av toppmodern
          teknologi. Standardlösningar är ingenting för oss - vi vet att man
          uppnår högsta produktivitet genom att anpassa mjukvaran efter
          verksamheten, inte verksamheten efter mjukvaran.
        </p>
        <div className="HireUsButtonContainer">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Kontakta oss
          </Link>
        </div>
        <div className="HireUsButtonContainer">
          <Link to="/about">Läs mer</Link>
        </div>
      </div>
      <animated.div className="RightSide" style={props}>
        <SpinningLogo />
      </animated.div>
    </div>
  );
};

export default Home;
