import {FaAngleDown } from 'react-icons/fa6';


import "./textLink.scss";

const TextLink = ({title, arrowMode}) => {
  return (
    <span className="textLink">{title} {arrowMode && <span className='sine'><FaAngleDown /></span>}</span>
  )
}

export default TextLink;