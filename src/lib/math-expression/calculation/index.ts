import { angleUnitConversion } from "../settings";
import { Calculation } from "./calculation";
import { Constant } from "./constant";
import { MathFunction } from "./math-function";
import { Operation } from "./operation";

export const operations = {
  "+": new Operation((_, x1, x2) => x1 + x2),
  "-": new Operation((_, x1, x2) => x1 - x2),
  "/": new Operation((_, x1, x2) => x1 / x2),
  "^": new Operation((_, x1, x2) => Math.pow(x1, x2)),
  "*": new Operation((_, x1, x2) => x1 * x2),
} as const;

export const constants = {
  π: new Constant(() => Math.PI),
  e: new Constant(() => Math.E),
} as const;

export const trigonomotry = {
  cosec: new MathFunction(({ angle }, x) => Math.asin(x) / angleUnitConversion(angle)),
  sec: new MathFunction(({ angle }, x) => Math.acos(x) / angleUnitConversion(angle)),
  cot: new MathFunction(({ angle }, x) => Math.atan(x) / angleUnitConversion(angle)),
  sin: new MathFunction(({ angle }, x) => Math.sin(x * angleUnitConversion(angle))),
  cos: new MathFunction(({ angle }, x) => Math.cos(x * angleUnitConversion(angle))),
  tan: new MathFunction(({ angle }, x) => Math.tan(x * angleUnitConversion(angle))),
};

export const mathFunctions = {
  ln: new MathFunction((_, x) => Math.log(x)),
  sqrt: new MathFunction((_, x) => x ^ (1 / 2)),
  floor: new MathFunction((_, x) => Math.floor(x)),
  ceil: new MathFunction((_, x) => Math.ceil(x)),
  round: new MathFunction((_, x) => Math.round(x)),
  test: new MathFunction((_, x, y, z) => x + y - z),
} as const;

export const baseCalculations = {
  ...operations,
  ...mathFunctions,
  ...trigonomotry,
  ...constants,
};

export const calculations: {
  [K in keyof typeof baseCalculations]: Calculation;
} & {
  [k: string]: Calculation;
} = {
  ...baseCalculations,
};
