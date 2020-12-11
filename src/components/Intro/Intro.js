import React from 'react';

import skypescreen from '../../assets/images/illustration-hero.png';
import videocall from '../../assets/images/illustration-hero--phone.png';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__consultation">
        <header>
          <h2 className="heading">Konsultacje z lekarzem on-line</h2>
        </header>

        <p className="intro__consultation__text">Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.</p>

        <div className="intro__consultation__buttons">
          <button className="btn btn__primary btn__primary--icon">
            <div className="icon__text">Zarezerwuj termin</div>
            <div className="icon__box">
              <span></span>
            </div>
          </button>
          <button className="btn btn__ghost">Jak to działa?</button>
        </div>
      </div>
      <div className="intro__img">
        <img className="intro__img--mobile" src={skypescreen} alt="skype screen with video call" />
        <img className="intro__img--desktop" src={videocall} alt="skype video call" />
      </div>
    </section>
  );
}

export default Intro;