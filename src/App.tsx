import React  from 'react';
import Hero from './components/common/Hero';
import Navigation from './components/common/Navigation';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
