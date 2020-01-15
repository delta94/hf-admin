import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

const Graph = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  // let numberOfFollowers = 0;
  // data.users.map((user) =>
  //   user.followers.map((follower) => {
  //     if (follower.nickname) {
  //       numberOfFollowers += 1;
  //     }
  //   }),
  // );
  // console.log(numberOfFollowers);
  // let followerAverage = (numberOfFollowers / data.users.length).toFixed(2);

  return (
    <div>
      <Content>그래프큐엘 테스트 페이지</Content>
    </div>
  );
};

export default Graph;
