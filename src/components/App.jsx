import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  NavContainer,
  HeaderContainer,
  MainContainer,
} from '../containers/index';
import style from './App.module.css';

function App() {
  return (
    <Router>
      <div className={style.app}>
        <HeaderContainer />
        <div className={style.body}>
          <NavContainer />
          <MainContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
