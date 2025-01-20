import { FaAngleLeft } from "react-icons/fa6";
import DishBox from "../dishBox/DishBox";
import H from "../h/H";
import Icon from "../icon/Icon";

import fattoush from "../../assets/img/Fattoush salad.png";
import eggSalad from "../../assets/img/Egg salad.png";
import vegetableSalad from "../../assets/img/Vegetable salad.png";

import P from "../p/P";
import "./specialDish.scss";
import { FaAngleRight } from "react-icons/fa";

const SpecialDish = () => {
  return (
    <div className="speatialDish">
      <div className="top">
        <div className="left">
          <P color={true} title={"Special Dishes"} />
          <H title={"Standout Dishes From Our Menu"} />
        </div>
        <div className="right">
          <Icon icon={<FaAngleLeft />} />
          <Icon icon={<FaAngleRight />} />
        </div>
      </div>
      <div className="bottom">
        <DishBox
          img={fattoush}
          des={"Description of the item"}
          price={"24.00"}
          title={"Fattoush Salad"}
          rating={4.9}
        />
        <DishBox
          img={eggSalad}
          des={"Description of the item"}
          price={"24.00"}
          title={"Egg Vegi Salad"}
          rating={4.6}
        />
        <DishBox
          img={vegetableSalad}
          des={"Description of the item"}
          price={"26.00"}
          title={"Vegetable Salad"}
          rating={4.5}
        />
      </div>
    </div>
  );
};

export default SpecialDish;
