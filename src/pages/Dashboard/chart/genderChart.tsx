import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { Pie } from 'react-chartjs-2';

export const GENDER_CHART = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let male = data.users.filter((user) => user.gender === 'MALE');
  let female = data.users.filter((user) => user.gender === 'FEMALE');
  let pieData = {
    labels: ['남자', '여자'],
    datasets: [
      {
        data: [male.length, female.length],
        backgroundColor: ['blue', 'red'],
      },
    ],
  };

  return <Pie data={pieData} />;
};
