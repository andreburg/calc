import { calculations } from "./calculation";
import {
  removeWhiteSpace,
  removeOuterBrackets,
  makeProductsExplicit,
} from "./parse/clean";
import { getFirstValidSymbol } from "./parse/query";

function cleanExpression(expression: string): string {
  return removeOuterBrackets(removeWhiteSpace(expression));
}

export function solveExpression(expression: string): number {
  expression = cleanExpression(expression);
  console.log(expression);

  const firstValidSymbol = getFirstValidSymbol(
    expression,
    Object.keys(calculations)
  );

  if (!firstValidSymbol) return parseInt(expression);

  const calculation =
    calculations[firstValidSymbol.symbol as keyof typeof calculations];

  const args = calculation.getArgs(
    expression,
    firstValidSymbol.symbol,
    firstValidSymbol.index
  );

  const solvedArgs = args.map((arg) => solveExpression(arg));

  return calculation.solve(...solvedArgs);
}
