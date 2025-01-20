import StarFill from "../../assets/svg/starFill.svg?react";
import c1 from "../../assets/img/c1.png";
import c2 from "../../assets/img/c2.png";
import c3 from "../../assets/img/c3.png";
import chef from "../../assets/img/chef.png";

import H from "../h/H";
import P from "../p/P";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="left">
        <div className="img">
          <span className="imgText shadow">
            Our Best Chef <span className="natofont">😁</span>
          </span>
          <span
            className="emoji natofont"
            style={{ "--xxis": "96%", "--yxis": "70%" }}
          >
            🍕
          </span>
          <span
            className="emoji natofont"
            style={{ "--xxis": "3%", "--yxis": "93%" }}
          >
            🍔
          </span>
          <span
            className="emoji natofont"
            style={{ "--xxis": "-3%", "--yxis": "63%", "--r": "348deg" }}
          >
            😋
          </span>
          <img src={chef} />
        </div>
      </div>
      <div className="right">
        <P color={true} title="Testimonials" />
        <H title={"What Our Customers Say About Us"} />
        <P title="“I enjoyed dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”" />

        <div className="customerFidb">
          <div className="profileImgs">
            <div className="profileImg" style={{ "--xt": "0px" }}>
              <img src={c1} />
            </div>
            <div className="profileImg" style={{ "--xt": "35px" }}>
              <img src={c2} />
            </div>
            <div className="profileImg" style={{ "--xt": "65px" }}>
              <img src={c3} />
            </div>
          </div>
          <div className="fidB">
            <p className="FTitle m-0">Customer Feedback</p>
            <p className="rating m-0">
              <StarFill />
              <span className="t3">
                <span className="rp">4.9</span>
                (20k Reviews)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
