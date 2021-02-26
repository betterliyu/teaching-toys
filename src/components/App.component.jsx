import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Button } from 'antd';
import style from './App.module.css';

export default hot(() => (
  <div className={style.red}>
    <span>Mrs Wei&apos;s teaching toys.😁</span>
    <Button type="primary">Primary Button</Button>
  </div>
));
