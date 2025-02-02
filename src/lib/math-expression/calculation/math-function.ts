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

    if (!bracketRange) {
      throw new ValidationError("Invalid function format.");
    }

    const range = [symbol.index, bracketRange[1] + 1] as NumberRange;
    const extracted = extractStringRange(expression, range);
    const inputArgs = removeOuterBrackets(extracted.extracted.slice(symbol.index + `${symbol.value}`.length));
    const args = inputArgs.split(",").map((arg) => tokenizeExpression(arg));
    const token = { symbol, args, calculation: this };
    return { token, expression: extracted.expression };
  }
}
