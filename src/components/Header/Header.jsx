import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import { DisplayMode } from '../../constants/HeaderConstants';

export default function Header({
  changeDisplayMode,
}) {
  return (
    <header className={style.header}>
      <span className={style.icon} />
      <span className={style.title}>Teaching Toys</span>
      <div className={style.windowBtns}>
        <div
          className={style.windowBtn}
          role="button"
          tabIndex="0"
          onClick={() => changeDisplayMode(DisplayMode.Min)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeDisplayMode(DisplayMode.Min); }}
        >
          <span className="codicon codicon-chrome-minimize" />
        </div>
        <div
          className={style.windowBtn}
          role="button"
          tabIndex="0"
          onClick={() => changeDisplayMode(DisplayMode.Max)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeDisplayMode(DisplayMode.Max); }}
        >
          <span className="codicon codicon-chrome-restore" />
          <span className="codicon codicon-chrome-maximize" />
        </div>
        <div
          className={style.windowBtn}
          role="button"
          tabIndex="0"
          onClick={() => changeDisplayMode(DisplayMode.Close)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeDisplayMode(DisplayMode.Close); }}
        >
          <span className="codicon codicon-close" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  changeDisplayMode: PropTypes.func.isRequired,
};
