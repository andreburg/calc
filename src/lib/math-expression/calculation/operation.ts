import { removeOuterBrackets } from "../parse/clean";
import { Calculation, CalculationsMap } from "./calculation";

class Operation extends Calculation {
  getArgs(expression: string, symbol: string, index: number): string[] {
    expression = removeOuterBrackets(expression);
    const lhs = expression.slice(0, index);
    const rhs = expression.slice(index + symbol.length);
    return [lhs, rhs];
  }
}

export const operations = {
  "+": new Operation((x1, x2) => x1 + x2),
  "-": new Operation((x1, x2) => x1 - x2),
  "*": new Operation((x1, x2) => x1 * x2),
  "/": new Operation((x1, x2) => x1 / x2),
  "^": new Operation((x1, x2) => Math.pow(x1, x2)),
} as const satisfies CalculationsMap;
