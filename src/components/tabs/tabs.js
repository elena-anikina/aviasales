import React from 'react';
import { connect } from 'react-redux';
import classes from './tabs.module.scss';
import TabButton from './tab-button';
import * as actions from '../../redux/actions';

const Tabs = ({ price, time, optimal, sortPrice, sortTime, sortOptimal }) => (
  <div className={classes.tabs}>
    <TabButton active={price} sort={sortPrice} text="самый дешевый" />
    <TabButton active={time} sort={sortTime} text="самый быстрый" />
    <TabButton active={optimal} sort={sortOptimal} text="оптимальный" />
  </div>
);

const mapStateToProps = ({ sort: { price, time, optimal } }) => ({ price, time, optimal });

export default connect(mapStateToProps, actions)(Tabs);
