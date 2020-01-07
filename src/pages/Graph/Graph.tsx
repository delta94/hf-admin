import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

const Graph = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (data) {
    console.log(data.users);
    data.users.map((user) => {
      console.log(user.email);
    });
  }

  return (
    <div>
      <Content>그래프큐엘 테스트 페이지</Content>
    </div>
  );
};

export default Graph;
