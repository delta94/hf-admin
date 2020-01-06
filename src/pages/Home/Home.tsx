import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';
const { Content } = Layout;

const Home = () => {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      {/* <Link to="dashboard"> */}
      <input />
      <input />
      <Button type="primary" size="large">
        <a href={'http://localhost:4000/auth/google'}>Admin Login</a>
      </Button>
      {/* </Link> */}
    </Content>
  );
};

export default Home;
