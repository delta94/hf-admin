import React from 'react';
import { Bar } from 'react-chartjs-2';
import { MOTIVATION_CHART } from '../../chart/motivationChart';

export const Chart = () => {
  return (
    <div>
      <div>
        <MOTIVATION_CHART />
      </div>
    </div>
  );
};

export default Chart;
