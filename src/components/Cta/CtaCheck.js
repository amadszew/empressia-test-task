import React from 'react';

import checkIcon from '../../assets/icons/ui/check-white.svg';

const CtaCheck = ({text}) => (
  <div className="cta__check">
    <img src={checkIcon} alt="check" className="cta__check__icon" />
    <p className="cta__check__text">{text}</p>
  </div>
);

export default CtaCheck;
