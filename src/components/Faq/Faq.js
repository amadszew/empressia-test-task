import React from 'react';

import Question from './Question';

import faqImg from '../../assets/images/illustration-faq.png';

const Faq = () => (
  <section className="faq">
    <div className="faq__info">
      <header className="faq__info__header">
        <h3 className="heading">Najczęściej zadawane pytania</h3>
      </header>
      <button className="btn btn__ghost faq__info__btn">Sprawdź całe FAQ</button>

      <img src={faqImg} className="faq__info__img" />
    </div>
    <div className="faq__questions">
      <Question
        header={"Jakie są korzyści teleporady lekarskiej na naszym serwisie?"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tortor eget lorem suscipit eleifend pharetra et dui. Praesent venenatis sem quis lorem pellentesque, ac lobortis massa pharetra."} />
      <Question 
        header={"Jak zrealizuję konsultację?"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tortor eget lorem suscipit eleifend pharetra et dui."} />
      <Question
        header={"Czy jest możliwość odwołania wcześniej zarezerwowanej wizyty?"}
        text={"W przypadkach losowych gdy nie mogą Państwo zrealizować wizyty w umówionym terminie istnieje możliwość zmiany daty wizyty bądź jej odwołania do 24h przed planowym terminem. Dokonają Państwo tego za pomocą linka przesłanego w potwierdzeniu rezerwacji na podany przez Państwa adres e-mail."} />
      <Question
        header={"Co się dzieje w przypadku problemów technicznych?"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tortor eget lorem suscipit eleifend pharetra et dui. Praesent venenatis sem quis lorem pellentesque, ac lobortis massa pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tortor eget lorem suscipit eleifend pharetra et dui. Praesent venenatis sem quis lorem pellentesque, ac lobortis massa pharetra."} />
    </div>
  </section>
);

export default Faq;
