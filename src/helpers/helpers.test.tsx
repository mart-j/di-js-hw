import {
  FI_TEST_DATA,
  FS_TEST_DATA,
  filteredFeatureImportance,
  filteredFeatureStability,
  mergedDataTest,
} from './mockData';
import { getFeatureImportanceData, getFeatureStabitityData, mergeData } from './helpers';


describe('FeatureImportanceData Test', () => {
  it('should have lenght of 3', () => {
    expect(getFeatureImportanceData(FI_TEST_DATA)).toHaveLength(3);
  });
  it('should have keys (name, importance)', () => {
    getFeatureImportanceData(FI_TEST_DATA).forEach((item) => {
      expect(Object.keys(item)).toEqual(['name', 'importance']);
    });
  });
  it('each key should have propper value', () => {
    expect(getFeatureImportanceData(FI_TEST_DATA)).toEqual(
      filteredFeatureImportance,
    );
  });
});


describe('FeatureStabitityData Test', () => {
  it('should have lenght of 3', () => {
    expect(getFeatureStabitityData(FS_TEST_DATA)).toHaveLength(3);
  });
  it('should have keys (yBaseline,yProductionx, LeftEdge, psi, stabilityGroup, nanStabilityAnalysis)', () => {
    getFeatureStabitityData(FS_TEST_DATA).forEach((item) => {
      expect(Object.keys(item)).toEqual([
        'name',
        'yBaseline',
        'yProduction',
        'xLeftEdge',
        'psi',
        'stabilityGroup',
        'nanStabilityAnalysis',
      ]);
    });
  });
  it('each key should have propper value', () => {
    expect(getFeatureStabitityData(FS_TEST_DATA)).toEqual(
      filteredFeatureStability,
    );
  });
});


describe('Data Merging Test', () => {
  it('should have lenght of 3', () => {
    expect(
      mergeData(filteredFeatureStability, filteredFeatureImportance),
    ).toHaveLength(3);
  });
  it('should merge by identical name', () => {
    expect(
      mergeData(filteredFeatureStability, filteredFeatureImportance),
    ).toEqual(mergedDataTest);
  });
  it('should be sorted by highest importance', () => {
    expect(
      mergeData(filteredFeatureStability, filteredFeatureImportance).map(
        (item) => item.importance,
      ),
    ).toEqual([3, 2, 1]);
  });
});
