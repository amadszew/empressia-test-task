import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Intro />
        </main>
      </div>
    </div>
  );
}

export default App;
