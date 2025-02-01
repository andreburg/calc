import { MathSymbol } from "../symbol";
import { tokenizeExpression } from "../token";
import { removeOuterBrackets } from "../parse/clean";
import { Calculation, TokenizeResult } from "./calculation";

export class Operation extends Calculation {
  tokenize(expression: string, symbol: MathSymbol): TokenizeResult {
    expression = removeOuterBrackets(expression);
    let lhs = tokenizeExpression(expression.slice(0, symbol.index));
    let rhs = tokenizeExpression(expression.slice(symbol.index + String(symbol.value).length));
    const token = { symbol, args: [lhs, rhs], calculation: this };
    return { token, expression: "" };
  }
}

export const operations = {
  "+": new Operation((x1, x2) => x1 + x2),
  "-": new Operation((x1, x2) => x1 - x2),
  "/": new Operation((x1, x2) => x1 / x2),
  "^": new Operation((x1, x2) => Math.pow(x1, x2)),
  "*": new Operation((x1, x2) => x1 * x2),
} as const;
