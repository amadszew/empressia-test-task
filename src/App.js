import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Profit from './components/Profit/Profit';
import Faq from './components/Faq/Faq';
import Opinions from './components/Opinions/Opinions';

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
      </main>
    </div>
  );
}

export default App;
