import _ from 'lodash';
import * as type from '../types/types';

export const getFeatureStabitityData = ( FEATURE_STABILITY: type.FeatureStabilityType ) => {
  const { data: { productionModelMetrics: { parameterStability } } } = FEATURE_STABILITY;
  const parameterStabilityArr = Object.entries(parameterStability)
    .map(
      (item) => {

        return {
          name: item[0],
          yBaseline: item[1].stabilityAnalysis.yBaseline,
          yProduction: item[1].stabilityAnalysis.yProduction,
          xLeftEdge: item[1].stabilityAnalysis.xLeftEdge.map((num) =>
            Number(num.toFixed(2)),
          ),
          psi: item[1].stabilityAnalysis.psi[0],
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


export const getFeatureImportanceData = ( FEATURE_IMPRTANCE: type.FeatureImportanceType ) => {
  const { data: { featureImportance: { metrics } } } = FEATURE_IMPRTANCE;
  const { names, importance } = metrics;

  return names.map((name, i) => {
    return { name, importance: importance[i] };
  });
};


export const mergeData = ( 
  filteredFSData: type.FilteredFSData[],
  filteredFIData: type.FilteredFIData[]) => {
  const merged = _.map(filteredFSData, (item) => {
    return _.merge(item, _.find(filteredFIData, { name: item.name }));
  });
  return _.orderBy(merged, ['type', 'importance'], ['asc', 'desc']);
};
