export type ChartData = {
  name: string;
  importance: number;
  stabilityGroup: number;
  yBaseline: number[];
  yProduction: number[];
  binWidth: number;
  xLeftEdge: number[];
  nanStabilityAnalysis: { yBaseline: number[]; yProduction: number[] };
};
