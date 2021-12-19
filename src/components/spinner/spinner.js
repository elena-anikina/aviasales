import React from 'react';
import classes from './spinner.module.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <div className={classes.spinner}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Spinner;
