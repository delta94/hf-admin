import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { Bar } from 'react-chartjs-2';

export const MOTIVATION_CHART = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

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

  let barData = {
    labels: ['증량', '증감', '친구찾기', '외로움'],
    datasets: [
      {
        label: '인원',
        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [weightInc, wieghtDec, findFriend, loneliness],
      },
    ],
  };

  return (
    <Bar
      data={barData}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true,
        title: {
          display: true,
          text: 'motivation',
          fontSize: 20,
        },
        legend: {
          display: false,
          position: 'top',
        },
      }}
    />
  );
};
