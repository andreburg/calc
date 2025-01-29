import { MathSymbol } from "../math-symbol";
import { MathToken } from "../math-token";

export type TokenizeResult = { token: MathToken; expression: string };

export abstract class Calculation {
  constructor(protected func: (...args: number[]) => number) {}

  abstract tokenize(expression: string, symbol: MathSymbol): TokenizeResult;

  solve(...args: number[]): number {
    return this.func(...args);
  }
}
