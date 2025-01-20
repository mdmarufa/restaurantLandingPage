import StarFill from '../../assets/svg/starFill.svg?react'
import Star from '../../assets/svg/star.svg?react'

import "./minipopup.scss";

const MiniPopup = ({img, title, price, star}) => {

  const stars = []

  for(let i = 0; i < 5; i++) {
    if(i <= star-1) {
      stars.push(<StarFill key={i} />)
    }else {
      stars.push(<Star key={i} />)
    }
  }

  return (
    <div className="minipopup shadow">
      <div className="miniImg">
        <img src={img} />
      </div>
      <div className="miniRight">
        <p className="miniTitle">{title}</p>
        <div className='rating'>{stars}</div>
        <span>
          <span className="priceSine">$</span>{price}
        </span>
      </div>
    </div>
  );
};

export default MiniPopup;
