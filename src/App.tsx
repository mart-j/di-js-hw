import React, { useState } from 'react';
import FeaturImportance from './components/featureImportance/FeatureImportance';
import ValueDistribution from './components/valueDistribution/ValueDistribution';
import { chartData } from './helpers/helpers';
import { ChartData } from './types/types';
import styles from './App.module.scss';

const App = () => {
  const [showChart, setShowChart] = useState(false);
  const [selectedPosition, setSelectedPostition] = useState<ChartData>();


  const showChartHandler = (index: number) => {
    setSelectedPostition(chartData![index]);
    setShowChart(true);
  };

  const closeChartHandler = () => {
    setShowChart(false);
  };

  return (
    <div className={styles.container}>

      <div className={styles.featureImportanceWrapper}>
        <FeaturImportance
          chartData={chartData}
          showChartHandler={showChartHandler}
          showChart={showChart}
        />
      </div >
      {
        selectedPosition && showChart &&
        <div className={styles.valueDistributionWrapper}>
          <ValueDistribution
            closeChartHandler={closeChartHandler}
            selectedPosition={selectedPosition} />
        </div>
      }
    </div>
  );
};
export default App;
