import { Calculation } from "./calculation";
import { constants } from "./constant";
import { mathFunctions } from "./math-function";
import { operations } from "./operation";

export const baseCalculations = {
  ...operations,
  ...mathFunctions,
  ...constants,
};

export const calculations: {
  [K in keyof typeof baseCalculations]: Calculation;
} & {
  [k: string]: Calculation;
} = {
  ...baseCalculations,
};
