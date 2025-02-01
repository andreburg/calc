import { MathSymbol } from "../symbol";
import { MathToken } from "../token";

export type TokenizeResult = { token: MathToken; expression: string };

export abstract class Calculation {
  constructor(protected func: (...args: number[]) => number) {}

  abstract tokenize(expression: string, symbol: MathSymbol): TokenizeResult;

  solve(...args: number[]): number {
    return this.func(...args);
  }
}
