import React from 'react';

import 'antd/dist/antd.css';
import { Line } from 'react-chartjs-2';
import { Layout } from 'antd';
const { Content } = Layout;

const lineData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Revenue',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 1,
      data: [100, 200, 300, 400, 200, 300, 600, 800, 500, 400, 500, 800],
    },
  ],
};

const Chart = () => {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      <div>
        <Line data={lineData} />
      </div>
    </Content>
  );
};

export default Chart;
