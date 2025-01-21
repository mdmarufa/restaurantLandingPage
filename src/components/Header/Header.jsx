import BrandLogo from "../brandLogo/BrandLogo";
import Icon from "../icon/Icon";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import TextLink from "../textLink/TextLink";
import { DataContext } from "../../context/Context";
import { use } from "react";

import { FaBarsStaggered, FaBars } from "react-icons/fa6";
import SearchIcon from "../../assets/svg/searchIconsvg.svg?react";
import SopingBagIcon from "../../assets/svg/shopingBagIcon.svg?react";
import "./header.scss";

const Header = ({ref}) => {
  const dataContext = use(DataContext);
  const { scrollHeight, currentScroll, offsetHeight } = dataContext.data;
  const toggleLinksMode = dataContext.data.isLinkActive ? (
    <FaBars />
  ) : (
    <FaBarsStaggered />
  );

  return (
    <header ref={ref}>
      <BrandLogo />
      <div className={`links ${dataContext.data.isLinkActive ? "active" : ""}`}>
        <TextLink title="Home" />
        <TextLink title="Menu" arrowMode={true} childLinks={["Menu Sub link here", "Menu Sub link here", "Menu Sub link here", "Menu Sub link here", "Menu Sub link here", "Menu Sub link here", "Menu Sub link here"]} />
        <TextLink title="Services" arrowMode={true} childLinks={["Sevices Sub link here", "Sevices Sub link here", "Sevices Sub link here"]} />
        <TextLink title="Offers" />
        <div className="btnTexts text-center">
          <TextLink title="Search" />
          <TextLink title="Card" />
        </div>
      </div>
      <div className="headerBtns">
        <Icon icon={<SearchIcon />} />
        <Icon icon={<SopingBagIcon />} />
        <div className="cbBtn">
          <PrimaryBtn title={"Contact"} callMode={true} />
        </div>
        <div
          className="toggleLinks"
          onClick={(e) => {
            dataContext.updateData({
              ...dataContext.data,
              isLinkActive: !dataContext.data.isLinkActive,
              bcx: e.clientX,
              bcy: e.clientY,
            });
          }}
        >
          <Icon icon={toggleLinksMode} />
        </div>
      </div>

      <div
        className="scrollInd"
        style={{
          "--w": `${(currentScroll / (scrollHeight - offsetHeight)) * 100}`,
        }}
      ></div>
    </header>
  );
};

export default Header;
