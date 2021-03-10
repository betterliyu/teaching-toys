import { Button } from 'antd';
import React, { useState } from 'react';
import Text from '../../../constants/Text';
import importAll from '../../../utils/importAll';
import style from './U7.module.css';

const imgs = require.context('./img', true, /\.(jpg|png|svg|gif)$/);
const pies = Object.values(importAll(imgs));

export default function U7() {
  const [img, setImg] = useState('');

  const pick = () => {
    if (pies.length === 0) {
      return;
    }
    let newPie = '';
    while (!newPie || newPie === img) {
      const s = Math.floor(Math.random() * pies.length);
      newPie = pies[s];
    }
    setImg(newPie);
  };

  return (
    <div className={style.wrapper}>
      <Button onClick={pick}>{Text.U7.showMeFoodBtn}</Button>
      <br />
      <img src={img} alt="" width="200" />
    </div>
  );
}
