import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Profit from './components/Profit/Profit';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Intro />
          <Profit />
          <Faq />
        </main>
      </div>
    </div>
  );
}

export default App;
