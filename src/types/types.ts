export type FeatureImportanceType = {
  data: {
    featureImportance: {
      __typename: string;
      metrics: { importance: number[]; names: string[] };
    };
  };
};

export type FeatureStabilityType = {
  data: {
    productionModelMetrics: {
      parameterStability: {
        [key: string]: {
          nanStabilityAnalysis: {
            binWidth: number[];
            psi: number[];
            stabilityGroup: number[];
            xLeftEdge: number[];
            yBaseline: number[];
            yProduction: number[];
          };
          stabilityAnalysis: {
            binWidth: number[];
            psi: number[];
            stabilityGroup: number[];
            xLeftEdge: number[];
            yBaseline: number[];
            yProduction: number[];
          };
        };
      };
    };
  };
};

export type FilteredFIData = {
  name: string;
  importance: number;
};

export type FilteredFSData = {
  name: string;
  yBaseline: number[];
  yProduction: number[];
  xLeftEdge: number[];
  psi: number;
  stabilityGroup: number;
  nanStabilityAnalysis: {
    yProduction: number[];
    yBaseline: number[];
  };
};

export type ChartData = {
  name: string;
  importance: number;
  stabilityGroup: number;
  yBaseline: number[];
  yProduction: number[];
  psi: number;
  xLeftEdge: number[];
  nanStabilityAnalysis: { yBaseline: number[]; yProduction: number[] };
};
