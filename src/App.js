import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Profit from './components/Profit/Profit';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Intro />
          <Profit />
        </main>
      </div>
    </div>
  );
}

export default App;
