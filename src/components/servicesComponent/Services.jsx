import H from "../h/H";
import P from "../p/P";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import ServiceBox from "../serviceBox/ServiceBox";

import SaladIcon from '../../assets/svg/salad.svg?react';
import ShopingCartCheck from '../../assets/svg/shoppingCartCheck.svg?react';
import TimeFast from '../../assets/svg/timeFast.svg?react';
import Gift from '../../assets/svg/gift.svg?react';


import "./services.scss";

const ServicesComponent = () => {
  return (
    <div className="services">
      <div className="left">
        <P color={true} title={"Our Story & Services"} />
        <H title={"Our Culinary Journey And Services"} />
        <P
          title={
            "Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality."
          }
        />
        <br />
        <br />
        <PrimaryBtn title={"Explore Now"} />
      </div>
      <div className="right">
        <ServiceBox
          title={"Catering"}
          icon={<SaladIcon />}
          des={"Delight your guests with our flavors and  presentation"}
        />
        <ServiceBox
          title={"Fast delivery"}
          icon={<TimeFast />}
          des={"We deliver your order promptly to your door"}
        />
        <ServiceBox
          title={"Online Ordering"}
          icon={<ShopingCartCheck />}
          des={"Explore menu & order with ease using our Online Ordering "}
        />
        <ServiceBox
          title={"Gift Cards"}
          icon={<Gift />}
          des={"Give the gift of exceptional dining with Foodi Gift Cards"}
        />
      </div>
    </div>
  );
};

export default ServicesComponent;
