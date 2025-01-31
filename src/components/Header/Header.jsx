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

const Header = ({ ref }) => {
  const dataContext = use(DataContext);
  const { scrollHeight, currentScroll, offsetHeight } = dataContext.data;
  const toggleLinksMode = dataContext.data.isLinkActive ? (
    <FaBars />
  ) : (
    <FaBarsStaggered />
  );

  const handleClick = (e, isLinkActive) => {
    dataContext.updateData({
      ...dataContext.data,
      isLinkActive: isLinkActive,
      bcx: e.clientX,
      bcy: e.clientY,
    });
  };

  return (
    <header ref={ref}>
      <BrandLogo />
      <div className={`links ${dataContext.data.isLinkActive ? "active" : ""}`} onClick={(e) => handleClick(e, true)} >
        <TextLink title="Home" />
        <TextLink title="Menu" arrowMode={true} />
        <TextLink title="Services" arrowMode={true} />
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
          onClick={(e) => handleClick(e, !dataContext.data.isLinkActive)}
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
