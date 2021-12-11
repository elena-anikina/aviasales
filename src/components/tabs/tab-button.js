import React from "react";
import classes from './tabs.module.scss';

const TabButton = ({active, text, sort}) => {

    const classNames = active ? `${classes.btn} ${classes.active}` : classes.btn;

    return (
        <button
            onClick={sort}
            type="button"
            className={classNames}>
            {text}
        </button>
    );
};

export default TabButton;