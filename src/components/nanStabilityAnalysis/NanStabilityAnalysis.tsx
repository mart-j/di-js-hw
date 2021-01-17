import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from '../../types';
import styles from './NanStabilityAnalysis.module.scss';


interface Props {
  selectedPosition: ChartData;
}

const NanStabilityAnalysis: FC<Props> = ({ selectedPosition }) => {

  const distributionGraphState = {
    datasets: [
      {
        label: 'yBaseline',
        backgroundColor: '#68a9ffeb',
        data: selectedPosition.nanStabilityAnalysis.yBaseline,

      },
      {
        label: 'yProduction',
        backgroundColor: '#fcff00b8',
        data: selectedPosition.nanStabilityAnalysis.yProduction,


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
                    text: 'Nan Stability Analysis',
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
export default NanStabilityAnalysis;
