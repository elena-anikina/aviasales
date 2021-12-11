import React from 'react';
import {connect} from 'react-redux';
import classes from './sidebar.module.scss';
import Checkbox from '../checkbox/checkbox';
import * as actions from '../../actions';

const Sidebar = ({zero, one, two, three, all, filterAllFunc, filterZeroFunc, filterOneFunc, filterTwoFunc, filterThreeFunc}) => (
        <div className={classes.sidebar}>
            <p className={classes.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Checkbox checked={all} func={filterAllFunc} text="Все" />
            <Checkbox checked={zero} func={filterZeroFunc} text="Без пересадок" />
            <Checkbox checked={one} func={filterOneFunc} text="1 пересадка" />
            <Checkbox checked={two} func={filterTwoFunc} text="2 пересадки" />
            <Checkbox checked={three} func={filterThreeFunc} text="3 пересадки" />
        </div>
    )

const mapStateToProps = ({filters: {zero, one, two, three}, filterAll: all}) => ({zero, one, two, three, all});

export default connect(mapStateToProps, actions)(Sidebar);
