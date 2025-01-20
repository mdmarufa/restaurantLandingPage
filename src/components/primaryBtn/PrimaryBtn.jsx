import CallIcon from '../../assets/svg/callIcon.svg?react';
import TextLink from '../textLink/TextLink';

import "./primaryBtn.scss";

const PrimaryBtn = ({title, callMode, shadow}) => {
  return (
    <span className={`primaryBtn ${shadow ? "shodowColorize" : ""}`}>
      {callMode && <span className="icon">{<CallIcon />}</span>}
      <TextLink title={title} />
    </span>
  );
};

export default PrimaryBtn;