import React from 'react';
import { Bar } from 'react-chartjs-2';
import { LEVELOF3DAE_CHART } from '../../chart/levelOf3DaeChart';

export const Chart = () => {
  return (
    <div>
      <div>
        <LEVELOF3DAE_CHART />
      </div>
    </div>
  );
};

export default Chart;
