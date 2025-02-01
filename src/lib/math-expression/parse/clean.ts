import { getMatchingBrackets } from "./query";

export function removeWhiteSpace(text: string): string {
  return text.replace(/\s+/g, "");
}

export function removeOuterBrackets(text: string): string {
  const matchingBrackets = getMatchingBrackets(text);
  const hasOuterBracketPair = matchingBrackets.find(([start, end]) => start === 0 && end === text.length - 1);
  if (hasOuterBracketPair) return removeOuterBrackets(text.replace(/^\(|\)$/g, ""));
  return text;
}

// VV Don't mind the hacky functions VV
// Numbers and products are not explicitly defined with a border so we will add * to indicate a border
export function makeProductsExplicit(text: string): string {
  return text
    .replace(/(\d)(\()/g, "$1*$2")
    .replace(/(\))(\d)/g, "$1*$2")
    .replace(/\)(\()/g, ")*(");
}

// This is to enforce the sign precedence of a number
export function replaceNegativeNumbers(text: string): string {
  return text.replace(/-/g, "+(-1)*");
}

// We want to remove the "+" if it is not needed to indicate addition / subtraction
export function cleanProducts(text: string): string {
  return text.replace(/(?<![\d\)\(\+\-])[+-]/g, "");
}
