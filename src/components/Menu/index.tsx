import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

const index = () => {
  return (
    <Link to="/messages" style={{ marginRight: '150px', cursor: 'pointer' }}>
      <Icon type="message" />
    </Link>
  );
};

export default index;
