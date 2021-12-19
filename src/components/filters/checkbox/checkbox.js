import React from 'react';
import PropTypes from 'prop-types';
import classes from './checkbox.module.scss';

const Checkbox = ({ checked, text, func }) => {
  const textMob = text === 'Все' ? text : parseInt(text, 10) || '0';

  return (
    <div className={classes.checkbox}>
      <input id={text} type="checkbox" checked={checked} onChange={func} />

      <span aria-label="checkbox" role="checkbox" tabIndex="0" aria-checked={checked} onClick={func} onKeyDown={func} />

      <label htmlFor={text} className={classes.text}>
        {text}
      </label>
      <label htmlFor={text} className={classes.textMob}>
        {textMob}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Checkbox;
