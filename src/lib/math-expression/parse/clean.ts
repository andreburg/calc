import { getMatchingBrackets } from "./query";

export function removeWhiteSpace(text: string): string {
  return text.replace(" ", "");
}

export function removeOuterBrackets(text: string): string {
  const matchingBrackets = getMatchingBrackets(text);
  const hasOuterBracketPair = matchingBrackets.find(([start, end]) => start === 0 && end === text.length - 1);
  if (hasOuterBracketPair) return removeOuterBrackets(text.replace(/^\(|\)$/g, ""));
  return text;
}

export function makeProductsExplicit(text: string): string {
  return text
    .replace(/(\d)(\()/g, "$1*$2")
    .replace(/(\))(\d)/g, "$1*$2")
    .replace(/\)(\()/g, ")*(");
}

export function replaceNegativeNumbers(text: string): string {
  return text.replace(/-/g, "+(-1)*");
}

export function cleanProducts(text: string): string {
  return text.replace(/\*\+/g, "*").replace(/\/\+/g, "/");
}
