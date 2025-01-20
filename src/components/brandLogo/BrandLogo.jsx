import "./brandLogo.scss";
import logo from '../../assets/svg/primaryLogo.svg'
import refreshWind from "../../handler/ReFreshWindow";

const BrandLogo = () => {
  return (
    <div className="primaryLogo" onClick={refreshWind}>
    <img src={logo} />
  </div>
  )
}

export default BrandLogo;