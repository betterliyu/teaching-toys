import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import { DisplayMode } from '../../constants/SystemConstants';

export default function Header({
  isMaximized,
  changeWindowSize,
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
          onClick={() => changeWindowSize(DisplayMode.Min)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeWindowSize(DisplayMode.Min); }}
        >
          <span className="codicon codicon-chrome-minimize" />
        </div>
        <div
          className={style.windowBtn}
          role="button"
          tabIndex="0"
          onClick={() => changeWindowSize(DisplayMode.Max)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeWindowSize(DisplayMode.Max); }}
        >
          {isMaximized
            ? <span className="codicon codicon-chrome-restore" />
            : <span className="codicon codicon-chrome-maximize" />}
        </div>
        <div
          className={style.windowBtn}
          role="button"
          tabIndex="0"
          onClick={() => changeWindowSize(DisplayMode.Close)}
          onKeyPress={(e) => { if (e.key === 'Enter') changeWindowSize(DisplayMode.Close); }}
        >
          <span className="codicon codicon-close" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isMaximized: PropTypes.bool.isRequired,
  changeWindowSize: PropTypes.func.isRequired,
};
