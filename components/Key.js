import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ text, classType, handleClick }) =>
  <span onClick={handleClick} className={classType} data-text={text}>
    {text}
  </span>;

export default Key;
