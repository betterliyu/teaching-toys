import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <span className={style.icon} />
      <span className={style.title}>Teaching Toys</span>
      <div className={style.windowBtns}>
        <div className={style.windowBtn}>
          <span className="codicon codicon-chrome-minimize" />
        </div>
        <div className={style.windowBtn}>
          <span className="codicon codicon-chrome-maximize" />
        </div>
        <div className={style.windowBtn}>
          <span className="codicon codicon-close" />
        </div>
      </div>
    </header>
  );
}
