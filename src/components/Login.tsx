import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Input, Icon, Button, Form } from 'antd';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const onChangeUsernmae = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    setIsLogin(true);
  };
  return (
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
      <Button type="primary" size="large" onClick={() => onLogin()}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
