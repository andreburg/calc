import { calculations } from "./calculation";
import { Calculation } from "./calculation/calculation";
import { Constant } from "./calculation/constant";
import { cleanExpression } from "./expression";
import { Settings } from "./settings";
import { getValidSymbols, MathSymbol } from "./symbol";

export type MathToken = {
  symbol: MathSymbol;
  args: MathToken[][];
  calculation: Calculation;
};

export function productOfTokens(tokens: MathToken[], settings: Settings) {
  return (
    tokens.reduce((prod, token) => {
      return prod * solveToken(token, settings);
    }, 1) * Number(!!tokens.length)
  );
}

export function solveToken(token: MathToken, settings: Settings): number {
  const solvedArgs = token.args.map((tokens) => productOfTokens(tokens, settings));
  return token.calculation.solve(settings, ...solvedArgs);
}

export function tokenizeExpression(expression: string): MathToken[] {
  expression = cleanExpression(expression);
  if (expression == "") return [];

  const value = Number(expression);
  if (!isNaN(value) && value !== undefined)
    return [
      new Constant(() => value).tokenize(expression, {
        index: 0,
        value: expression,
      }).token,
    ];

  const symbol = getValidSymbols(expression, Object.keys(calculations))[0];

  const calculation = calculations[symbol.value];
  const result = calculation.tokenize(expression, symbol);

  return [result.token, ...tokenizeExpression(result.expression)];
}
