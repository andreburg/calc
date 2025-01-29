import { MathSymbol } from "../math-symbol";
import { extractStringRange } from "../parse/query";
import { NumberRange } from "../types";
import { Calculation, TokenizeResult } from "./calculation";

export class Constant extends Calculation {
  tokenize(expression: string, symbol: MathSymbol): TokenizeResult {
    const range: NumberRange = [symbol.index, symbol.index + String(symbol.value).length];
    const { expression: newExp } = extractStringRange(expression, range);
    const token = { symbol, args: [], calculation: this };
    return { token, expression: newExp };
  }
}

export const constants = {
  π: new Constant(() => Math.PI),
  e: new Constant(() => Math.E),
} as const;
