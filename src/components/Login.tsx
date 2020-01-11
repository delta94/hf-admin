import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input, Icon, Button, Form } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../graphql/queries';
import { useCookies } from 'react-cookie';
// import Test from './LoginQuery';
let query;

const Login = () => {
  const initIsLogin = () => Boolean(localStorage.getItem('isLogin') || false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(initIsLogin);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const { data } = useQuery(GET_TOKEN, {
    variables: { ...query },
  });

  useEffect(() => {
    const data = localStorage.getItem('isLogin');
    if (data) {
      setIsLogin(Boolean(JSON.parse(data)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  });

  const onChangeUsernmae = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    query = { email: username, password: password };
    setIsLogin(true);
  };

  const onLogout = () => {
    removeCookie('access-token');
    setIsLogin(false);
    window.location.reload();
  };

  const onCookie = (token) => {
    setCookie('access-token', token);
  };

  if (data) {
    if (data.login) {
      onCookie(data.login.token);
      window.location.reload();
    }
  }

  return (
    <>
      {isLogin && cookies['access-token'] ? (
        <>
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
                onLogout();
              }}
            >
              Logout
            </Button>
            {/* <Test query={query} /> */}
          </Form>
        </>
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
};

export default Login;
