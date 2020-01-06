import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO, GET_USERS } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { userInfo } from 'os';
const { Content } = Layout;

const Graph = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  let l1, l2, l3, l4, l5;

  if (data) {
    l1 = data.users.filter((user) => user.levelOf3Dae === 'L1');
    l2 = data.users.filter((user) => user.levelOf3Dae === 'L2');
    l3 = data.users.filter((user) => user.levelOf3Dae === 'L3');
    l4 = data.users.filter((user) => user.levelOf3Dae === 'L4');
    l5 = data.users.filter((user) => user.levelOf3Dae === 'L5');
  }

  return (
    <div>
      <Content>{data ? <div></div> : <div>로그인</div>}</Content>
    </div>
  );
};

export default Graph;
