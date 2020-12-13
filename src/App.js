import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Profit from './components/Profit/Profit';
import Faq from './components/Faq/Faq';
import Opinions from './components/Opinions/Opinions';
import SeoIcons from './components/SeoIcons/SeoIcons';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';

function App() {
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
    </div>
  );
}

export default App;
