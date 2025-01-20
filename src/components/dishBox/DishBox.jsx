import StarFill from '../../assets/svg/starFill.svg?react'
import Loveicon from '../../assets/svg/love.svg?react'
import LoveFillicon from '../../assets/svg/loveFill.svg?react'


import "./dishBox.scss";
import { useState } from 'react';

const DishBox = ({ img, title, des, price, rating}) => {

  const [added, setAdded] = useState(false)

  return (
    <div className="dishBox shadowx">

    <div className="addToFavorite" onClick={() => setAdded(!added)}>
      <span className='ttl shadow'>{`${added ? "Remove from" : "Add to"}`} favorite</span>
      {added ? <LoveFillicon /> : <Loveicon />}
    </div>

      <div className="dishImg">
        <img src={img} />
      </div>
      <p className="catagoryHeader m-0">{title}</p>
      <p className="catagoryTitle ct m-0">{des}</p>

      <div className="foot">
        <div className="dfPrice">
          <span>
            <span className="priceSine">$</span>
            <span className="fw-semibold">{price}</span>
          </span>
        </div>
        <div className="dfRating fw-semibold">
          <StarFill /> &nbsp;{rating}
        </div>
      </div>
    </div>
  );
};

export default DishBox
