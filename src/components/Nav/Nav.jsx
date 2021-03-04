import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../constants/Text';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={style.navWrapper}>
      <ul className={style.nav}>
        <li key="U6">
          <NavLink
            className={style.link}
            to="/u6"
            activeClassName={style.avtive}
          >
            <span className={`${style.icon} ${style.iconU6}`} />
            <span className={`${style.title}`}>{Text.Nav_U6}</span>
          </NavLink>
        </li>
        <li key="U7">
          <NavLink
            className={style.link}
            to="/u7"
            activeClassName={style.avtive}
          >
            <span className={`${style.icon} ${style.iconU7}`} />
            <span className={`${style.title}`}>{Text.Nav_U7}</span>
          </NavLink>
        </li>
        <li key="wolves">
          <NavLink
            className={style.link}
            to="/wolves"
            activeClassName={style.avtive}
          >
            <span className={`${style.icon} ${style.iconWolves}`} />
            <span className={`${style.title}`}>{Text.Nav_Wolves}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
};
