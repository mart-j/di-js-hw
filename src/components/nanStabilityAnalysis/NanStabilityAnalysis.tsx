import React, { FC, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { NSOptions } from '../../chartOptions/chartOptions';
import { ChartData } from '../../types/types';
import styles from './NanStabilityAnalysis.module.scss';


interface Props {
  selectedPosition: ChartData;
}

const NanStabilityAnalysis: FC<Props> = ({ selectedPosition }) => {

  const state = useRef({
    labels: Object.keys(selectedPosition.nanStabilityAnalysis),
    datasets: [
      {
        backgroundColor: ['#ec3929d4', '#dfed39c7'],
        data: [selectedPosition.nanStabilityAnalysis.yBaseline[0],
          selectedPosition.nanStabilityAnalysis.yProduction[0],
        ],
      },
    ],
  });

  return (
    <div className={styles.chartWrapper}>
      <Bar
        data={state.current}
        options={NSOptions}
      />
    </div>
  );
};
export default NanStabilityAnalysis;
