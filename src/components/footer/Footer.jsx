import BrandLogo from "../brandLogo/BrandLogo";
import FooterLinkSection from "../footerLinkSection/FooterLinkSection";

import FacebookIcon from "../../assets/svg/facebook.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";
import TwitterIcon from "../../assets/svg/twitter.svg?react";
import YoutubeIcon from "../../assets/svg/youtube.svg?react";
import DevIcon from "../../assets/svg/developer.svg?react";

import P from "../p/P";
import "./footer.scss";
import openNewWind from "../../handler/openNewWind";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <section className="brandingF">
          <BrandLogo />
          <div className="hs"></div>
          <P
            title={
              "Savor the artistry where every dish is a culinary masterpiece"
            }
          />
        </section>
        <div className="sx">
          <FooterLinkSection
            title={"Userful links"}
            links={["About us", "Events", "Blogs", "FAQ"]}
          />
          <FooterLinkSection
            title={"Main Menu"}
            links={["Home", "Offers", "Menus", "Reservation"]}
          />
          <FooterLinkSection
            title={"Userful links"}
            links={["example@gmail.com", "+64 958 248 966", "Social media"]}
          />
        </div>
      </div>
      <div className="last">
        <div className="socialMediaLinks">
          <div className="bIcon">
            <FacebookIcon />
          </div>
          <div className="bIcon">
            <TwitterIcon />
          </div>
          <div className="bIcon">
            <InstagramIcon />
          </div>
          <div className="bIcon">
            <YoutubeIcon />
          </div>
          <div className="bIcon" onClick={() => openNewWind("https://md-maruf-ali-p.pages.dev/")}>
            <DevIcon />
          </div>
        </div>
        <P title={"Copyright &copy; 2023 Foodi | All rights reserved"} />
      </div>
    </footer>
  );
};

export default Footer;
