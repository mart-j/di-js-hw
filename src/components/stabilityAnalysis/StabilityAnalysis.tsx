import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from '../../types';
import styles from './StabilityAnalysis.module.scss';


interface Props {
  selectedPosition: ChartData
}

const StabilityAnalysis: FC<Props> = ({ selectedPosition }) => {

  const distributionGraphState = {
    labels: selectedPosition.xLeftEdge,
    datasets: [
      {
        label: 'yBaseline',
        backgroundColor: '#e4ff00',
    
        data: selectedPosition.yBaseline,
      },
      {
        label: 'yProduction',
        backgroundColor: '#ed11fb',
        data: selectedPosition.yProduction,
      },
    ],
  };

  return (
        <div className={styles.chartWrapper}>
            <div className={styles.buttonWrapper}>
            </div>
            <Bar
                data={distributionGraphState}
                options={{
                  title: {
                    display: true,
                    text: 'Stability Analysis',
                    fontSize: 20,
                    position: 'bottom',
                  },
                  legend: {
                    display: true,
                    position: 'right',
                  },
                }}
            />
        </div>
  );
};
export default StabilityAnalysis;
