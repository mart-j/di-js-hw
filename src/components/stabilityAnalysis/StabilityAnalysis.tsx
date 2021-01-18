import React, { FC, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { SAOptions } from '../../chartOptions/chartOptions';
import { ChartData } from '../../types/types';
import styles from './StabilityAnalysis.module.scss';


interface Props {
  selectedPosition: ChartData
}

const StabilityAnalysis: FC<Props> = ({ selectedPosition }) => {

  const state = useRef({
    labels: selectedPosition.xLeftEdge,
    datasets: [
      {
        label: 'yBaseline',
        backgroundColor: '#e4ff00',
        data: selectedPosition.yBaseline,
      },
      {
        label: 'yProduction',
        backgroundColor: '#ec3929d4',
        data: selectedPosition.yProduction,
      },
    ],
  });

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.psi}>
        {`Population stability index: ${selectedPosition.psi.toFixed(2)}`}
      </div>
      <div className={styles.buttonWrapper}>
      </div>
      <Bar
        data={state.current}
        options={SAOptions}
      />
    </div>
  );
};
export default StabilityAnalysis;
