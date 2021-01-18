import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from '../../types/types';
import styles from './NanStabilityAnalysis.module.scss';


interface Props {
  selectedPosition: ChartData;
}

const NanStabilityAnalysis: FC<Props> = ({ selectedPosition }) => {

  const distributionGraphState = {
    labels: Object.keys(selectedPosition.nanStabilityAnalysis),
    datasets: [
      {
        backgroundColor: [ '#ec3929d4', '#dfed39c7'],
        data: [selectedPosition.nanStabilityAnalysis.yBaseline[0],
          selectedPosition.nanStabilityAnalysis.yProduction[0],
        ],
      },
    ],
  };

  return (
        <div className={styles.chartWrapper}>
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
                    display: false,
                  },
                }}
            />
        </div>
  );
};
export default NanStabilityAnalysis;
