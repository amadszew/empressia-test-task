import React from 'react';

import CtaCheck from './CtaCheck';

const Cta = () => (
  <section className="cta">
    <header className="cta__header">
      <h2 className="heading heading--reverse">
        Zapisz się na wizytę on-line
      </h2>

      <button className="btn btn__ghost btn__ghost--invert cta__header__btn">
        Zarezerwuj termin już teraz
      </button>
    </header>

    <div className="cta__checks">
      <CtaCheck text="konsultacja bez zakładania konta" />
      <CtaCheck text="pełna dyskrecja" />
      <CtaCheck text="kontakt prz Skype lub WhatsApp" />
      <CtaCheck text="rezerwacja terminu on-line" />
      <CtaCheck text="szybkość i prostota" />
      <CtaCheck text="video konsultacja" />
      <CtaCheck text="e-recepta i e-zwolnienie" />
    </div>
  </section>
);

export default Cta;
