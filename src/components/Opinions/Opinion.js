import React, { useState, useEffect } from 'react';

import starFilled from '../../assets/icons/ui/star-filled.svg';
import starEmpty from '../../assets/icons/ui/star-empty.svg';

import avatarDumb from '../../assets/icons/ui/icon.svg';
import avatarSpecial from '../../assets/icons/ui/avatar.jpg';

const Opinion = props => {
  const [stars, setStars] = useState([]);

  const {
    date, 
    score, 
    comment, 
    userName,
    userAvatar} = props;

  const avatar = userAvatar ? avatarSpecial : avatarDumb;

  const starsGenerator = () => {
    const max = 5;

    for (let i = 1; i <= max; i++) {
      const fullstar = (
        <span key={`full${i}`}>
          <img src={starFilled} alt="filled star" />
        </span>
      );
      const emptystar = (
        <span key={`empty${i}`}>
          <img src={starEmpty} alt="empty star" />
        </span>
      )

      i <= score
        ? setStars(prev => [...prev, fullstar])
        : setStars(prev => [...prev, emptystar])
    };
  };

  useEffect(() => {
    starsGenerator()
  }, []);

  return (
    <article className="opinion">
      <header className="opinion__header">
        <div className="opinion__score">
          {stars}
        </div>
        <div className="opinion__date">{date}</div>
      </header>

      <p className="opinion__comment">{comment}</p>

      <div className="opinion__avatar">
        <img src={avatar} alt="avatar" />
        <span>{userName}</span>
      </div>
    </article>
  );
}

export default Opinion;
