import { productOfTokens, tokenizeExpression } from "./token";
import { removeWhiteSpace, removeOuterBrackets, makeProductsExplicit, replaceNegativeNumbers, cleanProducts } from "./parse/clean";
import { Settings } from "./settings";

export function cleanExpression(expression: string): string {
  return makeProductsExplicit(removeOuterBrackets(removeWhiteSpace(expression)));
}

export function solveExpression(expression: string, settings: Settings): number {
  expression = replaceNegativeNumbers(removeWhiteSpace(expression));
  const tokens = tokenizeExpression(cleanProducts(expression));
  return productOfTokens(tokens, settings);
}
