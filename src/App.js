import React, { useState } from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Profit from './components/Profit/Profit';
import Faq from './components/Faq/Faq';
import Opinions from './components/Opinions/Opinions';
import SeoIcons from './components/SeoIcons/SeoIcons';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import Cookies from './utils/Cookies/Cookies';

const App = () => {
  const [showCookies, setShowCookies] = useState(true)

  const handleClosePopup = () => {
    setShowCookies(false)
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <main>
        <div className="container">
          <Intro />
          <Profit />
          <Faq />
        </div>
        <Opinions />
        <div className="container">
          <SeoIcons />
          <Cta />
        </div>
      </main>
      <Footer />
      {showCookies && <Cookies onClosePopup={handleClosePopup} />}
    </div>
  );
}

export default App;
