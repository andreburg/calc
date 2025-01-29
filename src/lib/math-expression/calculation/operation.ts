import { MathSymbol } from "../math-symbol";
import { tokenizeExpression } from "../math-token";
import { removeOuterBrackets } from "../parse/clean";
import { Calculation, TokenizeResult } from "./calculation";

export class Operation extends Calculation {
  tokenize(expression: string, symbol: MathSymbol): TokenizeResult {
    expression = removeOuterBrackets(expression);
    let lhs = expression.slice(0, symbol.index);
    let rhs = expression.slice(symbol.index + String(symbol.value).length);
    const args = [lhs, rhs].map((arg) => tokenizeExpression(arg));
    const token = { symbol, args, calculation: this };
    return { token, expression: "" };
  }
}

export const operations = {
  "+": new Operation((x1, x2) => x1 + x2),
  "-": new Operation((x1, x2) => x1 - x2),
  "*": new Operation((x1, x2) => x1 * x2),
  "/": new Operation((x1, x2) => x1 / x2),
  "^": new Operation((x1, x2) => Math.pow(x1, x2)),
  "%": new Operation((x, _) => x / 100),
} as const;
