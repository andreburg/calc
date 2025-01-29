import { ValidationError } from "../error/validation-error";

export function getFirstValidSymbol(expression: string, symbols: string[]) {
  const matchingBrackets = getMatchingBrackets(expression);
  for (let symbol of symbols) {
    const symbolIndexes = getSymbolIndexes(expression, symbol);
    const validSymbolIndexes = symbolIndexes.filter((symbolIndex) =>
      matchingBrackets.every(
        (bracketIndexes) => !numberInRange(symbolIndex, bracketIndexes)
      )
    );
    const index = validSymbolIndexes[0];
    if (index !== undefined) return { symbol, index };
  }
}

export const numberInRange = (
  number: number,
  [lowerBound, upperBound]: [number, number]
) => number >= lowerBound && number <= upperBound;

export function getSymbolIndexes(expression: string, symbol: string): number[] {
  const indexes = [];
  let index = expression.indexOf(symbol);

  while (index !== -1) {
    indexes.push(index);
    index = expression.indexOf(symbol, index + 1);
  }

  return indexes;
}

export function getMatchingBrackets(expression: string): [number, number][] {
  let brackets: [number, number][] = [];
  let stack: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "(") stack.push(i);
    if (expression[i] == ")") {
      if (stack.length > 0) brackets.push([stack.pop()!, i]);
      else throw new ValidationError("Invalid Bracket Format!");
    }
  }
  if (stack.length !== 0) throw new ValidationError("Invalid Bracket Format!");

  return brackets;
}
