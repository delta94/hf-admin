import React from 'react';
import { Bar } from 'react-chartjs-2';
import { WEEK_CHART } from '../../chart/weekChart';

export const Chart = () => {
  return (
    <div>
      <div>
        <WEEK_CHART />
      </div>
    </div>
  );
};

export default Chart;
