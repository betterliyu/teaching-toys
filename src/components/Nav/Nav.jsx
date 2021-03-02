import React from 'react';
import PropTypes from 'prop-types';

export default function Nav({ active, onNavChanged }) {
  return (
    <nav>
      sdas
    </nav>
  );
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  onNavChanged: PropTypes.func.isRequired,
};
