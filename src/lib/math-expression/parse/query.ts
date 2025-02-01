import { ValidationError } from "../error/validation-error";
import { MathSymbol } from "../symbol";
import { NumberRange } from "../types";

export const numberInRange = (number: number, range: NumberRange) => number >= range[0] && number <= range[1];

export function getSubstringIndexes(expression: string, symbol: string): number[] {
  const indexes = [];
  let index = expression.indexOf(symbol);
  while (index !== -1) {
    indexes.push(index);
    index = expression.indexOf(symbol, index + 1);
  }
  return indexes;
}

export function extractStringRange(expression: string, range: NumberRange) {
  return {
    expression: expression.slice(0, range[0]) + expression.slice(range[1]),
    extracted: expression.slice(range[0], range[1]),
  };
}

export function getBracketRange(expression: string, symbol: MathSymbol) {
  const brackets = getMatchingBrackets(expression);
  const functionBrackets = brackets.find(([open]) => open === symbol.index + String(symbol.value).length);
  return functionBrackets;
}

export function getMatchingBrackets(expression: string): NumberRange[] {
  let brackets: NumberRange[] = [];
  let stack: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "(") stack.push(i);
    if (expression[i] == ")" && stack.length) {
      if (stack.length > 0) brackets.push([stack.pop()!, i]);
      else throw new ValidationError("Invalid Bracket Format!");
    }
  }
  if (stack.length !== 0) throw new ValidationError("Invalid Bracket Format!");

  return brackets;
}
