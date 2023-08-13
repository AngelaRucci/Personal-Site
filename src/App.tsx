import React  from 'react';
import Hero from './components/common/Hero';
import Navigation from './components/common/Navigation';
import Services from './components/common/Services';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
