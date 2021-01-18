import React, { FC } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { ChartData } from '../../types/types';
import styles from './FeatureImportance.module.scss';

interface Props {
  showChartHandler: (index: number) => void;
  chartData: ChartData[];
  showChart: boolean;
}

const FeatureDistribution: FC<Props> = ({ showChartHandler, chartData, showChart }) => {
  const horizontalState = {
    labels: chartData.map((item) => item.name),
    datasets: [
      {
        backgroundColor: (context: { dataIndex: number }) => {
          const index = context.dataIndex;
          const backgroundColor: { [key: number]: string } = {
            1: '#0095ffcf',
            2: '#ffb100cf',
            3: '#ff200094',
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
        height={300}
        options={{
          title: {
            display: true,
            text: 'Feature Importance',
            fontSize: 20,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{ ticks: { mirror: false, fontSize: 10, z: 2, fontColor: '#0f0f0ff0' } }],
          },
          
          onClick: (event: Event, element: { _index: number }[]) => {
            if (element[0]) {
              const index = element[0]._index;
              showChartHandler(index);
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
      {showChart && <div className={styles.overlay}></div>}
    </div>
  );
};
export default FeatureDistribution;
