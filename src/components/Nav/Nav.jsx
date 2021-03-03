import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import style from './Nav.module.css';

const { SubMenu } = Menu;

const Categories = [{
  key: 'learning',
  text: '课堂',
  items: [{
    key: 'Grade3_U6',
    text: '五颜六色的衣服',
    description: '二升三 第六单元',
    component: <div>五颜六色的衣服</div>,
  }, {
    key: 'Grade3_U7',
    text: '你要吃什么',
    description: '二升三 第七单元',
    component: <div>你要吃什么</div>,
  }],
}, {
  key: 'game',
  text: '游戏',
  items: [{
    key: 'wolves',
    text: '狼人杀',
    component: <div>狼人杀</div>,
  }],
}];

export default function Nav({ category, game }) {
  const selectedCategory = Categories.find((c) => c.key === category);
  return (
    <div className={style.navWrapper}>
      <nav>
        <MainNav categories={Categories} selectedCategory={category} />
      </nav>
      <nav>
        <GameList games={selectedCategory.items} selectedGame={game} />
      </nav>
    </div>
  );
}

Nav.propTypes = {
  category: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

function MainNav({ categories, selectedCategory }) {
  return (
    <Menu
      onClick={() => { }}
      style={{ width: 70 }}
      selectedKeys={selectedCategory ? [selectedCategory] : []}
      mode="inline"
    >
      {
        categories.map((c) => <Menu.Item style={{ height: 70 }} key={c.key}>{c.text}</Menu.Item>)
      }
    </Menu>
  );
}

MainNav.propTypes = {
  categories: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    component: PropTypes.element,
    items: PropTypes.array,
  }).isRequired,
  selectedCategory: PropTypes.string,
};

MainNav.defaultProps = {
  selectedCategory: null,
};

function GameList({ games, selectedGame }) {
  return (
    <Menu
      onClick={() => { }}
      style={{ width: 256 }}
      selectedKeys={selectedGame ? [selectedGame] : []}
      mode="inline"
    >
      {
        games.map((g) => {
          if (g.items) {
            return (
              <SubMenu key={g.key} title={g.text}>
                {g.items && g.items.map((i) => <Menu.Item key={i.key}>{i.text}</Menu.Item>)}
              </SubMenu>
            );
          }
          return (<Menu.Item key={g.key}>{g.text}</Menu.Item>);
        })
      }
    </Menu>
  );
}

GameList.propTypes = {
  games: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    component: PropTypes.element,
    items: PropTypes.array,
  }).isRequired,
  selectedGame: PropTypes.string,
};

GameList.defaultProps = {
  selectedGame: null,
};
