import MiniCatagoryBox from "../miniCatagoryBox/MiniCatagoryBox";
import berger from "../../assets/img/barger.png";
import png3 from "../../assets/img/pngwing 3.png";
import png6 from "../../assets/img/pngwing 6.png";
import png7 from "../../assets/img/pngwing 7.png";

import "./catagory.scss";
import P from "../p/P";
import H from "../h/H";

const Catagory = () => {
  return (
    <div className="calagoryContainer">
      <P mb={1} color={true} title="Customer Favorites" />
      <H title="Popular Catagories" />
      <div className="catagorySlider">
        <MiniCatagoryBox
          img={berger}
          width={90}
          header="Main Dish"
          title="(86 Items)"
        />
        <MiniCatagoryBox img={png3} header="Dessert" title="(48 Desserts)" />
        <MiniCatagoryBox
          img={png6}
          width={75}
          header="Break Fast"
          title="(12 Brack fast)"
        />
        <MiniCatagoryBox
          img={png7}
          width={60}
          header="Browse All"
          title="(255 Items)"
        />
      </div>
    </div>
  );
};

export default Catagory;
