import logo from "../../assets/svg/primaryLogo.svg";
import intersect from "../../assets/img/Intersect.png";
import noodles from "../../assets/img/noodles.png";
import veritarialSalat from "../../assets/img/veritarianSalat.png";

import H from "../h/H";
import MiniPopup from "../miniPopup/MiniPopup";
import P from "../p/P";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <H>
          Dive into Delights Of Delectable{" "}
          <span className="colorize"> Food</span>
        </H>
        <P title="Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship" />
        <div className="vsp"></div>
        <div className="hBtns">
          <PrimaryBtn title={"Order Now"} shadow={true} />
          <span className="cbBtn">
            <PrimaryBtn title={"Contact"} callMode={true} shadow={true} />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="img">
          <span className="popUpText shadow hp">
            Hot spicy Food <span className="natofont">🌶</span>{" "}
          </span>
          <div className="bg"></div>
          <img src={intersect} />
          <div className="pxRt">
            <MiniPopup
              img={noodles}
              star={3}
              price={"18.0"}
              title={"Spicy noodles"}
            />
            <MiniPopup
              img={veritarialSalat}
              star={4}
              price={"23.0"}
              title={"Vegetarian salad"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
