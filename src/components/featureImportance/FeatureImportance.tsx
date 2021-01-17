import React, { FC } from 'react';
import { HorizontalBar, defaults } from 'react-chartjs-2';
import { ChartData } from '../../types';
import styles from './FeatureImportance.module.scss';

defaults.global.defaultFontSize = 10;

interface Props {
  showGraphHandler: (index: number) => void;
  chartData: ChartData[];
  showGraph: boolean;
}




const FeatureDistribution: FC<Props> = ({ showGraphHandler, chartData, showGraph }) => {
  const horizontalState = {
    labels: chartData.map((item) => item.name),
    datasets: [
      {
        backgroundColor: (context: { dataIndex: number }) => {
          const index = context.dataIndex;
          const backgroundColor: { [key: number]: string } = {
            1: '#0095ffcf',
            2: '#ffb100cf',
            3: '#ff0000cf',
          };
          return backgroundColor[chartData[index].stabilityGroup];
        },
        data: chartData.map((item) => item.importance),
      },
    ],
  };

  return (
    <div className={styles.featureImportanceWrapper}>
      <HorizontalBar
        data={horizontalState}
        height={280}
        options={{
          title: {
            display: true,
            text: 'Feature Importance',
            fontSize: 20,
          },
          legend: {
            display: false,
          },

          onClick: (event: Event, element: { _index: number }[]) => {
            if (element[0]) {
              const index = element[0]._index;
              showGraphHandler(index);
            }
          },

          onHover: (e: MouseEvent, element: { _index: number }[]) => {
            const target = e.target as HTMLCanvasElement;
            if (element[0]) {
              target.style.cursor = 'pointer';
            } else {
              target.style.cursor = 'auto';
            }
          },
        }}
      />
      {showGraph && <div className={styles.overlay}></div>}
    </div>
  );
};
export default FeatureDistribution;
