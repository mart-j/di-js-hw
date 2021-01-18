import React, { useEffect, useState } from 'react';
import FEATURE_IMPORTANCE from './data/feature_importance.json';
import FEATURE_STABILITY from './data/feature_stability.json';
import FeaturImportance from './components/featureImportance/FeatureImportance';
import ValueDistribution from './components/valueDistribution/ValueDistribution';
import { getFeatureImportanceData, getFeatureStabitityData, mergeData } from './helpers/helpers';
import { ChartData } from './types/types';
import styles from './App.module.scss';

const App = () => {
  const [chartData, setChartData] = useState<ChartData[]>();
  const [showChart, setShowChart] = useState(false);
  const [selectedPosition, setSelectedPostition] = useState<ChartData>();

  useEffect(() => {
    const featureImportanceData = getFeatureImportanceData(FEATURE_IMPORTANCE);
    const featureStabilityData = getFeatureStabitityData(FEATURE_STABILITY);
    setChartData(mergeData(featureStabilityData, featureImportanceData));
  }, []);

  const showChartHandler = (index: number) => {
    setSelectedPostition(chartData![index]);
    setShowChart(true);
  };

  const closeChartHandler = () => {
    setShowChart(false);
  };

  return (
    <div className={styles.container}>
      {chartData && (
        <div className={styles.featureImportanceWrapper}>
          <FeaturImportance
            chartData={chartData}
            showChartHandler={showChartHandler}
            showChart={showChart}
          />
        </div >
      )}
      {
        selectedPosition && showChart &&
        <div className={styles.valueDistributionWrapper}>
          < ValueDistribution
            closeChartHandler={closeChartHandler}
            selectedPosition={selectedPosition} />
        </div>
      }

    </div>
  );
};
export default App;
