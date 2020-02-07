import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../../graphql/queries';
import { useCookies } from 'react-cookie';

import LoginButton from './LoginButton';

let query;

const Login = () => {
  const initIsLogin = () => Boolean(localStorage.getItem('isLogin') || false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(initIsLogin);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const { loading, error, data }: any = useQuery(GET_TOKEN, {
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

  const onChangeUsernmae = (e: any) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    query = { email: username, password: password };
    setIsLogin(true);
  };

  const onLogout = () => {
    removeCookie('access-token');
    removeCookie('stream-chat-token');
    setIsLogin(false);
    window.location.reload();
  };

  const onCookie = (loginToken: string, chatToken: string) => {
    setCookie('access-token', loginToken);
    setCookie('stream-chat-token', chatToken);
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) {
    return (
      <LoginButton
        username={username}
        onChangeUsernmae={onChangeUsernmae}
        password={password}
        onChangePassword={onChangePassword}
        onLogin={onLogin}
      />
    );
  }

  if (data) {
    if (data.login) {
      if (data.login.user.role === 'ADMIN') {
        onCookie(data.login.loginToken, data.login.chatToken);

        window.location.reload();
      }
    }
  }

  return (
    <>
      {isLogin && cookies['access-token'] ? (
        <>
          <Button
            onClick={() => {
              onLogout();
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <LoginButton
          username={username}
          onChangeUsernmae={onChangeUsernmae}
          password={password}
          onChangePassword={onChangePassword}
          onLogin={onLogin}
        />
      )}
    </>
  );
};

export default Login;
