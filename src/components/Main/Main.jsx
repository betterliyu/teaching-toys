import React from 'react';
import { Route, Switch } from 'react-router-dom';
import U6 from '../Games/U6/U6';
import U7 from '../Games/U7/U7';
import Wolves from '../Games/Wolves/Wolves';
import style from './Main.module.css';

export default function Content() {
  return (
    <main className={style.mainWrapper}>
      <Switch>
        <Route path="/u6" component={U6} />
        <Route path="/u7" component={U7} />
        <Route path="/wolves" component={Wolves} />
      </Switch>
    </main>
  );
}
