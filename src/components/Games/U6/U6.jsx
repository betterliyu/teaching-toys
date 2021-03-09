import React, { useRef, useState } from 'react';
import { SoundTwoTone } from '@ant-design/icons';
import style from './U6.module.css';

export default function U6() {
  const arcRef = useRef(null);
  const imgRef = useRef(null);
  const [imgDeg, setImgDeg] = useState(-45);
  const [arcDeg, setArcDeg] = useState(0);
  const [animation, setAnimation] = useState('');

  const clothes = ['t-shirt', 'cap', 'skirt', 'jacket'];
  const colors = ['black', 'brown', 'orange', 'yellow', 'white', 'green', 'red', 'blue'];
  let selectedClothes = clothes[0];
  let selectedColor = colors[7];

  const clickHandler = () => {
    setAnimation('');
    setArcDeg(0);
    setImgDeg(-45);

    setTimeout(() => {
      const arcdeg = parseInt(Math.random() * 10 * 36, 10) + 360 * 6;
      const imgdeg = parseInt(Math.random() * 10 * 36, 10) + 360 * 6;
      selectedColor = colors[Math.floor(((arcDeg % 360) - 22.5) < 0
        ? 7 : ((arcDeg % 360) - 22.5) / 45)];
      selectedClothes = clothes[Math.floor((imgDeg % 360) / 90)];

      setAnimation(style.animation);
      setArcDeg(arcdeg);
      setImgDeg(imgdeg);
    }, 0);
  };

  const sound = () => {
    const mp3 = new Audio(`http://dict.youdao.com/dictvoice?audio=${selectedColor}+${selectedClothes}&type=1`);
    mp3.play();
  };

  return (
    <div className={style.wrapper}>
      <SoundTwoTone onClick={sound} />
      <div className={style.circleOut}>
        <div
          className={`${style.circleIn} ${animation}`}
          ref={imgRef}
          style={{
            transform: `rotate(${imgDeg}deg)`,
          }}
        >
          <div className={style.imgSection}>
            <div className={style.img1} />
          </div>
          <div className={style.imgSection}>
            <div className={style.img2} />
          </div>
          <div className={style.imgSection}>
            <div className={style.img3} />
          </div>
          <div className={style.imgSection}>
            <div className={style.img4} />
          </div>
        </div>
        <div
          className={`${style.arc} ${animation}`}
          ref={arcRef}
          style={{
            transform: `rotate(${arcDeg}deg)`,
          }}
        >
          <div className={`${style.colorBorder} ${style.color1}`} />
          <div className={`${style.colorBorder} ${style.color2}`} />
          <div className={`${style.colorBorder} ${style.color3}`} />
          <div className={`${style.colorBorder} ${style.color4}`} />
          <div className={`${style.colorBorder} ${style.color6}`} />
          <div className={`${style.colorBorder} ${style.color7}`} />
          <div className={`${style.colorBorder} ${style.color8}`} />
        </div>
        <div
          role="button"
          tabIndex="-1"
          aria-label="Start"
          onClick={clickHandler}
        >
          <div className={style.point} />
          <div className={style.arrow} />
        </div>
      </div>

    </div>
  );
}
