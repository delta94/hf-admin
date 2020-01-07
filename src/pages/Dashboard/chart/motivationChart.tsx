import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { Bar } from 'react-chartjs-2';

export const MOTIVATION_CHART = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  let weightInc = 0;
  let wieghtDec = 0;
  let findFriend = 0;
  let loneliness = 0;
  let barData;
  if (data) {
    if (data) {
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
    }
    barData = {
      labels: ['증량', '증감', '친구찾기', '외로움'],
      datasets: [
        {
          label: '인원',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [weightInc, wieghtDec, findFriend, loneliness],
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
              text: 'motivation',
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
