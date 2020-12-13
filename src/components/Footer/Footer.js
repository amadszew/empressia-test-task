import React from 'react';

import empressiaMark from '../../assets/logos/mark_empressiaColor.svg';
import znanyLogo from '../../assets/logos/logo_znanylekarzColor.png';
import stars from '../../assets/icons/ui/star-full-5.svg';
import fbLogo from '../../assets/icons/social/facebook.svg';
import instaLogo from '../../assets/icons/social/instagram.svg';
import empressiaLogo from '../../assets/logos/logo_empressiaColor.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__icons">
        <div className="footer__icons__empressia"> 
          <img src={empressiaMark} alt="empressia - mark" />
        </div>
        <div className="footer__icons__wrapper">
          <div className="footer__icons__zl">
            <img src={stars} alt="score" className="footer__icons__zl__stars" />
            <span className="footer__icons__zl__text">
              5.0 (163 opinie) na 
            </span>
            <a href="#" target="_blank">
              <img src={znanyLogo} alt="znany lekarz - logo" className="footer__icons__zl__logo" />
            </a>
          </div>
          <div className="footer__icons__socials">
            <a href="#" target="_blank">
              <img src={fbLogo} alt="facebook - logo" />
            </a>
            <a href="#" target="_blank">
              <img src={instaLogo} alt="instagram - logo" />
            </a>
          </div>
        </div>
      </div>    

      <div className="footer__content">
        <div className="footer__menu">
          <p className="footer__menu__text">
            Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu.
          </p>

          <nav className="footer__nav">
            <ul className="footer__nav__list">
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">O mnie</a>
              </li>
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">Opinie</a>
              </li>
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">FAQ</a>
              </li>
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">Galeria</a>
              </li>
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">Blog</a>
              </li>
              <li className="footer__nav__list__item">
                <a href="#" target="_blank">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__columns">
          <div className="footer__column">
            <h5 className="footer__column__title">
              Pomagam w przypadkach
            </h5>
            <ul className="footer__column__list">
              <li className="footer__column__list__item">
                lorem ipsum dolor sit amet
              </li>
              <li className="footer__column__list__item">
                dermoscopy
              </li>
              <li className="footer__column__list__item">
                skin biopsy with a histological examination
              </li>
              <li className="footer__column__list__item">
                curettage e.g. focus of molluscum contagiosum
              </li>
              <li className="footer__column__list__item">
                electrocoagulation
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__column__title">
              Najpopularniejsze wpisy
            </h5>
            <ul className="footer__column__list">
              <li className="footer__column__list__item">
                <a href="#" target="_blank">
                  Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o filtrach SPF
                </a>
              </li>
              <li className="footer__column__list__item">
                <a href="#" target="_blank">
                  Jak walczyć z trądzikiem w każdym wieku?
                </a>
              </li>
              <li className="footer__column__list__item">
                <a href="#" target="_blank">
                  5 zasad bezpiecznego opalania
                </a>
              </li>
              <li className="footer__column__list__item">
                <a href="#" target="_blank">
                  Jak przygotować się do wizyty u dermatologa?
                </a>
              </li>
              <li className="footer__column__list__item">
                <a href="#" target="_blank">
                  Skutecznie pozbądź się zaczerwienień na twarzy
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </div>

    <div className="footer__end">
      <div className="container">
        <div className="footer__end__wrapper">
          <div className="footer__end__copy">
            <p>&copy; 2020 Wszelkie prawa zastrzeżone.</p>
            <a href="#">Polityka Prywatności</a>
          </div>
          <div className="footer__end__logo">
            <span>Realizacja</span>
            <img src={empressiaLogo} alt="empressia - logo" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
