import React from 'react';
import PropTypes from 'prop-types';

export default function Nav({ active, onNavChanged }) {
  return (
    <nav>
      I am Nav
      {active.toString()}
      <button type="button" onClick={() => onNavChanged({ key: 1 })}>Change</button>
    </nav>
  );
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  onNavChanged: PropTypes.func.isRequired,
};
