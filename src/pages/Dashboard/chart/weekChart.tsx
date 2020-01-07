import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { Bar } from 'react-chartjs-2';

export const WEEK_CHART = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  let mon = 0;
  let tue = 0;
  let wed = 0;
  let thu = 0;
  let fri = 0;
  let sat = 0;
  let sun = 0;
  let barData;
  if (data) {
    if (data) {
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
    barData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '인원',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: [mon, tue, wed, thu, fri, sat, sun],
        },
      ],
    };
  }

  return (
    <div>
      {data ? (
        <Bar
          data={barData}
          options={{
            title: {
              display: true,
              text: '운동 가능 날',
              fontSize: 20,
            },
            legend: {
              display: false,
              position: 'top',
            },
          }}
        />
      ) : (
        <div>x</div>
      )}
    </div>
  );
};
