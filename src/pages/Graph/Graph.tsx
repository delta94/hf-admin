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

  let gangnam = 0;
  let songpa = 0;
  let bundang = 0;
  data.users.filter((user) =>
    user.ableDistricts.filter((ableDistrict) => {
      if (ableDistrict.district.nameOfGu === '강남구') {
        gangnam += 1;
      }
      if (ableDistrict.district.nameOfGu === '분당구') {
        songpa += 1;
      }
      if (ableDistrict.district.nameOfGu === '송파구') {
        bundang += 1;
      }
    }),
  );

  console.log(gangnam, songpa, bundang);

  return (
    <div>
      <Content>그래프큐엘 테스트 페이지</Content>
    </div>
  );
};

export default Graph;
