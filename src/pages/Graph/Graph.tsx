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
    let mon = 0;
    let tue = 0;
    let wed = 0;
    let thu = 0;
    let fri = 0;
    let sat = 0;
    let sun = 0;
    data.users.filter((user) =>
      user.weekdays.filter((week) => {
        if (week.weekday === 'MONDAY') {
          mon += 1;
        }
        if (week.weekday === 'TUESDAY') {
          tue += 1;
        }
        if (week.weekday === 'WEDNESDAY') {
          wed += 1;
        }
        if (week.weekday === 'THURSDAY') {
          thu += 1;
        }
        if (week.weekday === 'FRIDAY') {
          fri += 1;
        }
        if (week.weekday === 'SATURDAY') {
          sat += 1;
        }
        if (week.weekday === 'SUNDAY') {
          sun += 1;
        }
      }),
    );
  }

  return (
    <div>
      <Content>{data ? <div></div> : <div>로그인</div>}</Content>
    </div>
  );
};

export default Graph;
