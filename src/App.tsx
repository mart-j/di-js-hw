import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import FEATURE_IMPRTANCE from './data/feature_importance.json';
import FEATURE_STABILITY from './data/feature_stability.json';
import FeaturImportance from './components/featureImportance/FeatureImportance';
import ValueDistribution from './components/valueDistribution/ValueDistribution';
import { ChartData } from './types';
import styles from './App.module.scss';

const App = () => {
  const [chartData, setChartData] = useState<ChartData[]>();
  const [showGraph, setShowGraph] = useState(false);
  const [selectedPosition, setSelectedPostition] = useState<ChartData>();



  const getParameterStabitityData = () => {
    const { data: { productionModelMetrics: { parameterStability } } } = FEATURE_STABILITY;
    const parameterStabilityArr = Object.entries(parameterStability).map(
      (item) => {
        return {
          name: item[0],
          yBaseline: item[1].stabilityAnalysis.yBaseline,
          yProduction: item[1].stabilityAnalysis.yProduction,
          xLeftEdge: item[1].stabilityAnalysis.xLeftEdge.map((num) =>
            Number(num.toFixed(2)),
          ),
          binWidth: item[1].stabilityAnalysis.binWidth[0],
          stabilityGroup: Math.max(
            item[1].nanStabilityAnalysis.stabilityGroup[0],
            item[1].stabilityAnalysis.stabilityGroup[0],
          ),
          nanStabilityAnalysis: {
            yProduction: item[1].nanStabilityAnalysis.yProduction,
            yBaseline: item[1].nanStabilityAnalysis.yBaseline,
          },
        };
      },
    );
    return parameterStabilityArr;
  };



  const getFeatureImportanceData = () => {
    const { data: { featureImportance: { metrics } } } = FEATURE_IMPRTANCE;
    const { names, importance } = metrics;
    return names.map((name, i) => {
      return { name, importance: importance[i] };
    });
  };



  const mergeChartsData = useRef(() => {
    const merge = _.map(getParameterStabitityData(),  (item) => {
      return _.merge(item, _.find(getFeatureImportanceData(), { 'name' : item.name }));
    });
    return _.orderBy(merge, ['type', 'importance'], ['asc', 'desc']);
    
  });

  useEffect(() => {
    setChartData(mergeChartsData.current());
  }, []);

  const showGraphHandler = (index: number) => {
    setSelectedPostition(chartData![index]);
    setShowGraph(true);
  };

  const closeChartHandler = () => {
    setShowGraph(false);
  };



  return (
    <div className={styles.chartsWrapper}>
      {chartData && (
        <div className={styles.featureImportanceWrapper}>
          <FeaturImportance
            chartData={chartData}
            showGraphHandler={showGraphHandler}
            showGraph={showGraph}
          />
        </div >
      )}
      {
        selectedPosition && showGraph &&
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
