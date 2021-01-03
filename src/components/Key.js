import React from 'react';

const Key = ({ text, classType, handleClick }) =>
  <span onClick={handleClick} className={classType} data-text={text}>
    {text}
  </span>;

export default Key;
