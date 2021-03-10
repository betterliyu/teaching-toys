import React, { useState } from 'react';
import { Divider } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Text from '../../constants/Text';
import style from './Nav.module.css';

const Size = {
  Large: 'large',
  Small: 'small',
};

export default function Nav() {
  const [size, setSize] = useState(Size.Large);

  return (
    <nav className={`${style.navWrapper} ${size}`}>
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
      <Divider className={style.divider} />
      {
        size === Size.Large
          ? <DoubleLeftOutlined className={style.toggle} onClick={() => setSize(Size.Small)} />
          : <DoubleRightOutlined className={style.toggle} onClick={() => setSize(Size.Large)} />
      }
    </nav>
  );
}

Nav.propTypes = {
};
