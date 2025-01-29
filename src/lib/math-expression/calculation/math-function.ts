import { removeOuterBrackets } from "../parse/clean";
import { Calculation } from "./calculation";

class MathFunction extends Calculation {
  getArgs(expression: string, symbol: string, index: number): string[] {
    const inputArgs = expression.slice(index + symbol.length);
    const cleanedInputArgs = removeOuterBrackets(inputArgs);
    return cleanedInputArgs.split(",");
  }
}

export const mathFunctions = {
  cosec: new MathFunction((x) => Math.asin(x) / 180),
  sec: new MathFunction((x) => Math.acos(x) / 180),
  cot: new MathFunction((x) => Math.atan(x) / 180),
  sin: new MathFunction((x) => Math.sin(x * 180)),
  cos: new MathFunction((x) => Math.cos(x * 180)),
  tan: new MathFunction((x) => Math.tan(x * 180)),
  ln: new MathFunction((x) => Math.log(x)),
  sqrt: new MathFunction((x) => x ^ (1 / 2)),
  floor: new MathFunction((x) => Math.floor(x)),
  ceil: new MathFunction((x) => Math.floor(x)),
  round: new MathFunction((x) => Math.round(x)),
  test: new MathFunction((x, y, z) => x + y + z),
} as const;
