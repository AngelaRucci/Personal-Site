import React  from 'react';
import Background from './Shader/ShaderObject';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='test'>
        <Background />
      </div>
      <h1>Hi mom!</h1>
    </div>
  );
}

export default App;
