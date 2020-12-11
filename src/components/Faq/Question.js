import React, { useState } from 'react';

const Question = ({header, text}) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div 
      onClick={handleOpen} 
      className={`faq__box ${open && 'faq__box--reverse'}`}
      >
      <header className="faq__question">
        <p className="faq__question__header">{header}</p>
        <span className="faq__question__chevron"></span>
      </header>
      {open && (
        <p className="faq__question__answer">{text}</p>
      )}
    </div>
  );
}

export default Question;
