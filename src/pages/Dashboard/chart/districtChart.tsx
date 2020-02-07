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
            display: false,
            fontSize: 20,
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    );

  let dongdaemoon = 0;
  let kangpook = 0;
  let youngsan = 0;
  let guemcheon = 0;
  let ganseo = 0;
  let eunpyeong = 0;
  let songpa = 0;

  data.users.filter((user) =>
    user.ableDistricts.filter((ableDistrict) => {
      if (ableDistrict.district.nameOfGu === '동대문구') {
        dongdaemoon += 1;
      }
      if (ableDistrict.district.nameOfGu === '강북구') {
        kangpook += 1;
      }
      if (ableDistrict.district.nameOfGu === '용산구') {
        youngsan += 1;
      }
      if (ableDistrict.district.nameOfGu === '금천구') {
        guemcheon += 1;
      }
      if (ableDistrict.district.nameOfGu === '강서구') {
        ganseo += 1;
      }
      if (ableDistrict.district.nameOfGu === '은평구') {
        eunpyeong += 1;
      }
      if (ableDistrict.district.nameOfGu === '송파구') {
        songpa += 1;
      }
    }),
  );

  let pieData = {
    labels: ['동대문', '강북', '용산', '금천', '강서', '은평', '송파'],
    datasets: [
      {
        data: [
          dongdaemoon,
          kangpook,
          youngsan,
          guemcheon,
          ganseo,
          eunpyeong,
          songpa,
        ],
        backgroundColor: [
          '#003f5c',
          '#374c80',
          '#7a5195',
          '#bc5090',
          '#ef5675',
          '#ff764a',
          '#ffa600',
        ],
      },
    ],
  };

  return (
    <Pie
      data={pieData}
      options={{
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: true,
          text: '지역 별 선호',
          fontSize: 20,
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
