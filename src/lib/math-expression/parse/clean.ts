import { getMatchingBrackets } from "./query";

export function removeWhiteSpace(text: string): string {
  return text.replace(" ", "");
}

export function removeOuterBrackets(text: string): string {
  const matchingBrackets = getMatchingBrackets(text);
  const hasOuterBracketPair = matchingBrackets.find(
    ([start, end]) => start === 0 && end === text.length - 1
  );
  if (hasOuterBracketPair)
    return removeOuterBrackets(text.replace(/^\(|\)$/g, ""));
  return text;
}

// export function isolateProducts(text: string): string {
//   return "";
// }

export function makeProductsExplicit(text: string): string {
  return text.replace(/([a-zA-Z]+|\d+(\.\d+)?|\))(?=[a-zA-Z\d\(])/g, "$1*");
}
