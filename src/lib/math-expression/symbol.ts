import { calculations } from "./calculation";
import {
  getMatchingBrackets,
  getSubstringIndexes,
  numberInRange,
} from "./parse/query";

export type MathSymbol = {
  value: keyof typeof calculations;
  index: number;
};

export function getSymbols(
  expression: string,
  symbols: string[]
): MathSymbol[] {
  return symbols.flatMap((value) =>
    getSubstringIndexes(expression, value).map((index) => ({ index, value }))
  );
}

export function getValidSymbols(
  expression: string,
  symbols: string[]
): MathSymbol[] {
  const matchingBrackets = getMatchingBrackets(expression);
  const foundSymbols = getSymbols(expression, symbols);
  const validSymbols = foundSymbols.filter((symbol) =>
    matchingBrackets.every(
      (bracketIndexes) => !numberInRange(symbol.index, bracketIndexes)
    )
  );
  return validSymbols;
}
