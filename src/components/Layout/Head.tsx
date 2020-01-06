import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Input, Icon, Button, Form } from 'antd';
const { Header } = Layout;

function Head() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsernmae = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (username, password) => {
    console.log(username, password);
  };
  return (
    <Header className="header">
      <Button type="primary" size="large">
        <a href={'http://localhost:4000/auth/google'}>임시 admin button</a>
      </Button>
      <Form style={{ position: 'absolute', top: '10px', right: '20px' }}>
        <Input
          prefix={<Icon type="user" />}
          style={{ width: '150px', marginRight: '15px' }}
          placeholder="Username"
          value={username}
          onChange={onChangeUsernmae}
        />
        <Input
          prefix={<Icon type="lock" />}
          style={{ width: '150px', marginRight: '15px' }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => onLogin(username, password)}
        >
          Login
        </Button>
      </Form>
    </Header>
  );
}

export default Head;
