export type HistoricalCalculationSchema = {
  input: string;
  output: string;
};

export type HistoricalCalculation = {
  id: number;
  input: string;
  output: string;
  timestamp: Date;
};
