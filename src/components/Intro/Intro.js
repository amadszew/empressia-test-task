import React from 'react';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__consultation">
        <header>
          <h2 className="heading">Konsultacje z lekarzem on-line</h2>
        </header>

        <p className="intro__consultation__text">Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.</p>

        <div className="intro__consultation__buttons">
          <button>
            Zarezerwuj termin
          </button>
          <button>Jak to działa?</button>
        </div>
      </div>
      <div className="intro__img"></div>
    </section>
  );
}

export default Intro;
