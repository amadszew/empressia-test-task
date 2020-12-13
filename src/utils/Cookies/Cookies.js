import React from 'react';

const Cookies = ({ onClosePopup }) => (
  <div className="cookies">
    <p className="cookies__info">
      Ta strona korzysta z <a href="#" target="_blank">ciasteczek</a>. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.  
    </p>
    <button onClick={() => onClosePopup()} className="cookies__btn"></button>
  </div>
);

export default Cookies;
