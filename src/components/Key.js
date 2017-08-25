import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Key.css';

const Key = ({ text, type, handleClick }) =>
  <span onClick={handleClick} className={type} data-text={text}>
    {text}
  </span>;

export default Key;
