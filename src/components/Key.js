import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Key.css';

const Key = ({ text, className, handleClick }) =>
  <span onClick={handleClick} className={className}>
    {text}
  </span>;

export default Key;
