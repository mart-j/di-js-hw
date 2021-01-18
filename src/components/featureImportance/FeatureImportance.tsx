import React, { FC, useRef } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { ChartData } from '../../types/types';
import { FIOptions } from '../../chartOptions/chartOptions';
import styles from './FeatureImportance.module.scss';

interface Props {
  showChartHandler: (index: number) => void;
  chartData: ChartData[];
  showChart: boolean;
}

const FeatureDistribution: FC<Props> = ({ showChartHandler, chartData, showChart }) => {

  const state = useRef({
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
  });

  return (
    <div className={styles.featureImportanceWrapper}>
      <HorizontalBar
        data={state.current}
        height={300}
        options={FIOptions(showChartHandler)}
      />
      {showChart && <div className={styles.overlay}></div>}
    </div>
  );
};
export default FeatureDistribution;
