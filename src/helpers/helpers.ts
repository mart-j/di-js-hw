import {
  FilteredFSData,
  FilteredFIData,
  FeatureStabilityType,
  ChartData,
  FeatureImportanceType,
} from '../types/types';
import FEATURE_IMPORTANCE from '../data/feature_importance.json';
import FEATURE_STABILITY from '../data/feature_stability.json';

export const getFeatureStabitityData = (
  _FEATURE_STABILITY: FeatureStabilityType,
) => {
  const { parameterStability } = _FEATURE_STABILITY.data.productionModelMetrics;
  const parameterStabilityArr = Object.entries(parameterStability).map(
    ([name, data]) => {
      return {
        name,
        yBaseline: data.stabilityAnalysis.yBaseline,
        yProduction: data.stabilityAnalysis.yProduction,
        xLeftEdge: data.stabilityAnalysis.xLeftEdge.map((num) =>
          Number(num.toFixed(2)),
        ),
        psi: data.stabilityAnalysis.psi[0],
        stabilityGroup: Math.max(
          data.nanStabilityAnalysis.stabilityGroup[0],
          data.stabilityAnalysis.stabilityGroup[0],
        ),
        nanStabilityAnalysis: {
          yProduction: data.nanStabilityAnalysis.yProduction,
          yBaseline: data.nanStabilityAnalysis.yBaseline,
        },
      };
    },
  );

  return parameterStabilityArr;
};

export const getFeatureImportanceData = (
  _FEATURE_IMPRTANCE: FeatureImportanceType,
) => {
  const { metrics } = _FEATURE_IMPRTANCE.data.featureImportance;
  const { names, importance } = metrics;

  return names.map((name, i) => {
    return { name, importance: importance[i] };
  });
};

export const mergeData = (
  filteredFSData: FilteredFSData[],
  filteredFIData: FilteredFIData[],
) => {
  const newData = [...filteredFSData, ...filteredFIData].reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = { ...item };
    } else {
      acc[item.name] = {
        ...acc[item.name],
        ...item,
      };
    }
    return acc;
  }, {} as { [key: string]: {} });
  const merged = Object.values(newData) as ChartData[];

  return merged.sort((a, b) => {
    return b.importance - a.importance;
  });
};

export const chartData = mergeData(
  getFeatureStabitityData(FEATURE_STABILITY),
  getFeatureImportanceData(FEATURE_IMPORTANCE),
);
