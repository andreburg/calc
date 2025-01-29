import { productOfTokens, tokenizeExpression } from "./math-token";
import { removeWhiteSpace, removeOuterBrackets, makeProductsExplicit, replaceNegativeNumbers, cleanProducts } from "./parse/clean";

export function cleanExpression(expression: string): string {
  return makeProductsExplicit(removeOuterBrackets(removeWhiteSpace(expression)));
}

export function solveExpression(expression: string): number {
  console.log(cleanProducts(replaceNegativeNumbers(expression)));
  const tokens = tokenizeExpression(cleanProducts(replaceNegativeNumbers(expression)));
  return productOfTokens(tokens);
}
