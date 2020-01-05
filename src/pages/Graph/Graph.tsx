import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO, GET_USERS } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { userInfo } from 'os';
const { Content } = Layout;

function Graph() {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  // if (data) {
  //   let gUser = data.users.map((user) => {
  //     let count = 0;
  //     if (user.provider === 'GOOGLE') {
  //       count += 1;
  //     }
  //     return count;
  //   });
  //   console.log('test', gUser);
  // }

  if (data) {
    let googleUser = 0;
    for (let i = 0; i < data.users.length; i++) {
      if (data.users[i].provider === 'GOOGLE') {
        googleUser += 1;
      }
    }
    console.log(googleUser);
  }

  return (
    <div>
      <Content>{data ? <div></div> : <div>로그인</div>}</Content>
    </div>
  );
}

export default Graph;
