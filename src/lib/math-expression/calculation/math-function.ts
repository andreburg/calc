import { ValidationError } from "../error/validation-error";
import { MathSymbol } from "../symbol";
import { tokenizeExpression } from "../token";
import { removeOuterBrackets } from "../parse/clean";
import { extractStringRange, getBracketRange } from "../parse/query";
import { NumberRange } from "../types";
import { Calculation, TokenizeResult } from "./calculation";

export class MathFunction extends Calculation {
  tokenize(expression: string, symbol: MathSymbol): TokenizeResult {
    const bracketRange = getBracketRange(expression, symbol);
    if (!bracketRange) throw new ValidationError("Invalid function format.");
    const range: NumberRange = [symbol.index, bracketRange[1] + 1];
    const { extracted, expression: newExpression } = extractStringRange(expression, range);
    const inputArgs = removeOuterBrackets(extracted.slice(symbol.index + `${symbol.value}`.length));
    const args = inputArgs.split(",").map((arg) => tokenizeExpression(arg));
    const token = { symbol, args, calculation: this };
    return { token, expression: newExpression };
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
  ceil: new MathFunction((x) => Math.ceil(x)),
  round: new MathFunction((x) => Math.round(x)),
} as const;
