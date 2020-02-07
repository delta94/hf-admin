import React from 'react';
import { Input, Icon, Button } from 'antd';

const LoginButton = ({
  username,
  onChangeUsernmae,
  password,
  onChangePassword,
  onLogin,
}) => (
  <>
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
  </>
);

export default LoginButton;
