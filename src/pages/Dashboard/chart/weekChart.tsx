import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { HorizontalBar } from 'react-chartjs-2';

const fakeData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '인원',
      backgroundColor: [
        '#003f5c',
        '#374c80',
        '#7a5195',
        '#bc5090',
        '#ef5675',
        '#ff764a',
        '#ffa600',
      ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [7, 7, 7, 7, 7, 7, 7],
    },
  ],
};

export const WEEK_CHART = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error)
    return (
      <HorizontalBar
        data={fakeData}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          title: {
            display: true,
            text: '요일별 사용빈도',
            fontSize: 20,
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
            position: 'top',
          },
        }}
      />
    );
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

  let barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: '인원',
        backgroundColor: [
          '#003f5c',
          '#374c80',
          '#7a5195',
          '#bc5090',
          '#ef5675',
          '#ff764a',
          '#ffa600',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [mon, tue, wed, thu, fri, sat, sun],
      },
    ],
  };

  return (
    <HorizontalBar
      data={barData}
      options={{
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        title: {
          display: true,
          text: '요일별 사용빈도',
          fontSize: 20,
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: 'top',
        },
      }}
    />
  );
};
