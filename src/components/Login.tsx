import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN, IS_LOGGED_IN } from '../graphql/queries';
import { Input, Icon, Button, Form } from 'antd';
let query;

function Head() {
  const initIsLogin = () => Boolean(localStorage.getItem('isLogin') || false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(initIsLogin);

  useEffect(() => {
    localStorage.setItem('isLogin', String(isLogin));
  }, [isLogin]);

  const { loading, error, data } = useQuery(GET_TOKEN, {
    variables: { ...query },
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

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

  return (
    <>
      <Button type="primary" size="large">
        <a href={'http://localhost:4000/auth/google'}>임시 admin button</a>
      </Button>
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
    </>
  );
}

export default Head;
