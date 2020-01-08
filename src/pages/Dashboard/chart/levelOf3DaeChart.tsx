import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { Bar } from 'react-chartjs-2';

export const LEVELOF3DAE_CHART = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let l1 = data.users.filter((user) => user.levelOf3Dae === 'L1');
  let l2 = data.users.filter((user) => user.levelOf3Dae === 'L2');
  let l3 = data.users.filter((user) => user.levelOf3Dae === 'L3');
  let l4 = data.users.filter((user) => user.levelOf3Dae === 'L4');
  let l5 = data.users.filter((user) => user.levelOf3Dae === 'L5');

  let barData = {
    labels: ['생초보', '초보', '중수', '고수', '괴물'],
    datasets: [
      {
        label: '인원',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [l1.length, l2.length, l3.length, l4.length, l5.length],
      },
    ],
  };

  return (
    <div>
      {data ? (
        <Bar
          data={barData}
          options={{
            title: {
              display: true,
              text: '삼대 중량',
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
