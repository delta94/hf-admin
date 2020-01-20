import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { HorizontalBar } from 'react-chartjs-2';

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
        backgroundColor: ['#ef5675', '#ff764a'],
      },
    ],
  };

  return (
    <HorizontalBar
      data={pieData}
      options={{
        legend: {
          display: false,
          position: 'top',
        },
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
};
