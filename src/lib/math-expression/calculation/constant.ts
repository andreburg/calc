import { MathSymbol } from "../symbol";
import { extractStringRange } from "../parse/query";
import { NumberRange } from "../types";
import { Calculation, TokenizeResult } from "./calculation";

export class Constant extends Calculation {
  tokenize(expression: string, symbol: MathSymbol): TokenizeResult {
    const range = [symbol.index, symbol.index + String(symbol.value).length];
    const extracted = extractStringRange(expression, range as NumberRange);
    return {
      token: { symbol, args: [], calculation: this },
      expression: extracted.expression,
    };
  }
}
