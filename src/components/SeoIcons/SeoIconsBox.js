import React from 'react';

const SeoIconsBox = ({icon, title, text}) => {
  return (
    <div className="seo-icons__box">
      <img src={icon} alt='ikona' className="seo-icons__box__icon" />

      <header className="seo-icons__box__header">
        <h5 className="heading">{title}</h5>
      </header>

      <p className="seo-icons__box__text">
        {text}
      </p>
    </div>
  );
}

export default SeoIconsBox;
