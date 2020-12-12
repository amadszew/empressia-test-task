import React, { useState } from 'react';

import Opinion from './Opinion';

const Opinions = () => {

  const [opinions, setOpinions] = useState([
    {
      id: 1,
      date: '10 lipca 2020',
      score: '5',
      comment: 'Polecam Pana dr. Wysłuchał wszystkiego i dokładnie wytłumaczył następny zadowolony pacjet. E-konsultacja to bardzo dobra forma wizyty gdy musimy zostać w domu.',
      user: {
        name: 'Jan',
        avatar: false,
      },
    },
    {
      id: 2,
      date: '10 lipca 2020',
      score: '4',
      comment: 'Pan Michał to świetny lekarz, nie spieszył się, obejrzał znamię, wyjaśnił wszystko, lek ze mną omówił więc nie wypisywał w ciemno jak to robi reszta lekarzy. Polecam lekarza.',
      user: {
        name: 'Maria',
        avatar: true,
      },
    },
    {
      id: 3,
      date: '10 lipca 2020',
      score: '5',
      comment: 'Bardzo sympatyczny i kompetentny Pan Doktor. Udziela szczegółowych informacji, jest zaangażowany i leki, które mi przepisał zaczęły działać bardzo szybko…',
      user: {
        name: 'Gniewosz',
        avatar: false,
      },
    },
    {
      id: 4,
      date: '10 lipca 2020',
      score: '1',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ex non tellus semper euismod sed vitae orci. Proin tempus massa et libero ultricies volutpat. Nunc metus neque, hendrerit ut sollicitudin eget, volutpat eget leo. Mauris sapien justo, consequat sed vulputate ac, vulputate eget lacus. Donec ut lacus vel dui viverra elementum.',
      user: {
        name: 'Anonim',
        avatar: false,
      },
    },
    {
      id: 5,
      date: '10 lipca 2020',
      score: '3',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ex non tellus semper euismod sed vitae orci.',
      user: {
        name: 'Jagna',
        avatar: false,
      },
    }
  ]);

  const scroll = i => {
    const items = document.querySelectorAll('.opinions__list__item');

    const dots = document.querySelectorAll('.opinions__dot');

    items[i].scrollIntoView({
      behavior: "smooth", 
      inline: "start"
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
  }

  return (
    <section className="opinions">
      <header className="opinions__header">
        <h3 className="heading">Co mówią zadowoleni klienci</h3>
      </header>

      <div className="container">
        <div className="opinions__wrapper">
          <ul className="opinions__list">
            {opinions.map(opinion => (
              <li className="opinions__list__item" key={opinion.id}>
                <Opinion 
                  date={opinion.date}
                  score={opinion.score}
                  comment={opinion.comment}
                  userName={opinion.user.name}
                  userAvatar={opinion.user.avatar} />
              </li>
            ))}
          </ul>
          <div className="opinions__dots">
            <button onClick={() => scroll(0)} className="opinions__dot active"></button>
            <button onClick={() => scroll(1)} className="opinions__dot"></button>
            <button onClick={() => scroll(2)} className="opinions__dot"></button>
            <button onClick={() => scroll(3)} className="opinions__dot"></button>
            <button onClick={() => scroll(4)} className="opinions__dot"></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;
