import React from 'react';

import iconskype from '../../assets/images/contact-skype.png';
import iconwapp from '../../assets/images/contact-whatsapp.png';
import bg from '../../assets/images/illustration-segment-1.svg';

const Profit = () =>  (
  <section className="profit">
    <img className="profit__bg" src={bg} />
    <div className="profit__content">
      <div className="profit__icons">
        <img 
          className="profit__icons__icon" 
          src={iconskype} 
          alt="Skype Icon" />
        <img 
          className="profit__icons__icon" 
          src={iconwapp} 
          alt="Whats App Icon" />
      </div>
      <header className="profit__header">
        <h2 className="heading">
          Skorzystaj z najszybciej rozwijającej się gałęzi medycyny.
        </h2>
        <p>
          Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.
        </p>
      </header>
    </div>
  </section>
);

export default Profit;
