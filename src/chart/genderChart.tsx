import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../graphql/queries';
import { Pie } from 'react-chartjs-2';

export const GENDER_CHART = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  let male, female, pieData;
  if (data) {
    male = data.users.filter((user) => user.gender === 'MALE');
    female = data.users.filter((user) => user.gender === 'FEMALE');
    pieData = {
      labels: ['남자', '여자'],
      datasets: [
        {
          data: [male.length, female.length],
          backgroundColor: ['blue', 'red'],
        },
      ],
    };
  }

  return <div>{data ? <Pie data={pieData} /> : <div>x</div>}</div>;
};
