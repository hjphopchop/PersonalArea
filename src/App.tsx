import React, { FC } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

const App:FC =() => {

  
  return (
    <div className="App">
      <div className='content'>
      <AppRouter/>
      </div>
      
    </div>
  );
}

export default App;
