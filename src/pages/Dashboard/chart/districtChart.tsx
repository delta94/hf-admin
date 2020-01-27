import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

import { Pie } from 'react-chartjs-2';

const fakeData = {
  datasets: [
    {
      data: [3, 3, 3],
      backgroundColor: ['#bc5090', '#ef5675', '#ff764a'],
    },
  ],
};

export const District_Chart = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading)
    return (
      <Pie
        data={fakeData}
        options={{
          title: {
            display: true,
            fontSize: 20,
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    );
  if (error)
    return (
      <Pie
        data={fakeData}
        options={{
          title: {
            display: true,
            fontSize: 20,
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    );

  let gangnam = 0;
  let songpa = 0;
  let youngsan = 0;

  data.users.filter((user) =>
    user.ableDistricts.filter((ableDistrict) => {
      if (ableDistrict.district.nameOfGu === '강남구') {
        gangnam += 1;
      }
      if (ableDistrict.district.nameOfGu === '송파구') {
        songpa += 1;
      }
      if (ableDistrict.district.nameOfGu === '용산구') {
        youngsan += 1;
      }
    }),
  );

  let pieData = {
    labels: ['강남', '송파', '용산'],
    datasets: [
      {
        data: [gangnam, songpa, youngsan],
        backgroundColor: ['#bc5090', '#ef5675', '#ff764a'],
      },
    ],
  };

  return (
    <Pie
      data={pieData}
      options={{
        title: {
          display: true,
          text: '지역 별 운동가능 비율',
          fontSize: 20,
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
