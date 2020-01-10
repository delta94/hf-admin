import React from 'react';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../graphql/queries';
import { useCookies } from 'react-cookie';

const Test = ({ query }) => {
  const [cookies, setCookie] = useCookies(['name']);
  const { data } = useQuery(GET_TOKEN, {
    variables: { ...query },
  });

  const onCookie = (token) => {
    setCookie('access-token', token);
  };

  if (data) {
    if (data.login) {
      onCookie(data.login.token);
      window.location.reload();
    }
  }

  return <></>;
};

export default Test;
