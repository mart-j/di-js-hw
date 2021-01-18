export const FI_TEST_DATA = {
  data: {
    featureImportance: {
      __typename: 'string',
      metrics: {
        importance: [1, 2, 3],
        names: ['first_name', 'second_name', 'third_name'],
      },
    },
  },
};

export const FS_TEST_DATA = {
  data: {
    productionModelMetrics: {
      parameterStability: {
        first_name: {
          nanStabilityAnalysis: {
            binWidth: [1],
            psi: [0.1],
            stabilityGroup: [2],
            xLeftEdge: [12],
            yBaseline: [5],
            yProduction: [0],
          },
          stabilityAnalysis: {
            binWidth: [1],
            psi: [0.2],
            stabilityGroup: [1],
            xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            yBaseline: [0, 0, 1, 2, 1, 2],
            yProduction: [0, 1, 2, 4, 1, 2],
          },
        },
        second_name: {
          nanStabilityAnalysis: {
            binWidth: [1],
            psi: [0.1],
            stabilityGroup: [2],
            xLeftEdge: [12],
            yBaseline: [5],
            yProduction: [0],
          },
          stabilityAnalysis: {
            binWidth: [1],
            psi: [0.2],
            stabilityGroup: [1],
            xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            yBaseline: [0, 0, 1, 2, 1, 2],
            yProduction: [0, 1, 2, 4, 1, 2],
          },
        },
        third_name: {
          nanStabilityAnalysis: {
            binWidth: [1],
            psi: [0.1],
            stabilityGroup: [2],
            xLeftEdge: [12],
            yBaseline: [5],
            yProduction: [0],
          },
          stabilityAnalysis: {
            binWidth: [1],
            psi: [0.2],
            stabilityGroup: [1],
            xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            yBaseline: [0, 0, 1, 2, 1, 2],
            yProduction: [0, 1, 2, 4, 1, 2],
          },
        },
      },
    },
  },
};

export const filteredFeatureImportance = [
  { importance: 1, name: 'first_name' },
  { importance: 2, name: 'second_name' },
  { importance: 3, name: 'third_name' },
];

export const filteredFeatureStability = [
  {
    name: 'first_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
  {
    name: 'second_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
  {
    name: 'third_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
];

export const mergedDataTest = [
  {
    importance: 3,
    name: 'third_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
  {
    importance: 2,
    name: 'second_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
  {
    importance: 1,
    name: 'first_name',
    nanStabilityAnalysis: { yBaseline: [5], yProduction: [0] },
    psi: 0.2,
    stabilityGroup: 2,
    xLeftEdge: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    yBaseline: [0, 0, 1, 2, 1, 2],
    yProduction: [0, 1, 2, 4, 1, 2],
  },
];
