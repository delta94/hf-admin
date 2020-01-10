import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { useCookies } from 'react-cookie';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../graphql/queries';
import { Input, Icon, Button, Form } from 'antd';

let query;

function Head() {
  const initIsLogin = () => Boolean(localStorage.getItem('isLogin') || false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['name']);
  const [isLogin, setIsLogin] = useState(initIsLogin);

  useEffect(() => {
    localStorage.setItem('isLogin', String(isLogin));
  }, [isLogin, cookies]);

  const { data } = useQuery(GET_TOKEN, {
    variables: { ...query },
  });

  const onChangeUsernmae = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    query = { email: username, password: password };
    setIsLogin(!isLogin);
  };

  const onCookie = (token) => {
    setCookie('access-token', token);
  };

  if (data) {
    if (data.login) {
      onCookie(data.login.token);
    }
  }

  return (
    <>
      {isLogin ? (
        <Form
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'white',
          }}
        >
          <span style={{ marginRight: '20px' }}>반갑습니다</span>
          <Button
            onClick={() => {
              onLogin();
            }}
          >
            Logout
          </Button>
        </Form>
      ) : (
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
      )}
    </>
  );
}

export default Head;
