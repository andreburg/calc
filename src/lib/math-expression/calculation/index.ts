import { constants } from "./constant";
import { mathFunctions } from "./math-function";
import { operations } from "./operation";

export const calculations = {
  ...operations,
  ...mathFunctions,
  ...constants,
} as const;
