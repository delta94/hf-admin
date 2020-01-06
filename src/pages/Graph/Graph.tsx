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

  if (data) {
    // console.log(data.users[0].motivations[0].motivation);
    let weightInc = 0;
    let wieghtDec = 0;
    let findFriend = 0;
    let loneliness = 0;
    data.users.filter((user) =>
      user.motivations.filter((moti) => {
        if (moti.motivation === 'WEIGHT_INCREASE') {
          weightInc += 1;
        }
        if (moti.motivation === 'WEIGHT_LOSS') {
          wieghtDec += 1;
        }
        if (moti.motivation === 'FIND_FRIEND') {
          findFriend += 1;
        }
        if (moti.motivation === 'LONELINESS') {
          loneliness += 1;
        }
      }),
    );
    console.log(weightInc, wieghtDec, findFriend, loneliness);
  }

  return (
    <div>
      <Content>{data ? <div></div> : <div>로그인</div>}</Content>
    </div>
  );
};

export default Graph;
