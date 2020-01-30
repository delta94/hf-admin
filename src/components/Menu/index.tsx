import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Badge } from 'antd';

const index = () => {
  return (
    <Link to="/messages" style={{ marginRight: '150px', cursor: 'pointer' }}>
      <Badge dot>
        <Icon type="message" />
      </Badge>
    </Link>
  );
};

export default index;
