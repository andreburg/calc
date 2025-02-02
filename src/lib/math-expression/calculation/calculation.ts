import { Settings } from "../settings";
import { MathSymbol } from "../symbol";
import { MathToken } from "../token";

export type TokenizeResult = { token: MathToken; expression: string };

export abstract class Calculation {
  constructor(protected func: (settings: Settings, ...args: number[]) => number) {}

  abstract tokenize(expression: string, symbol: MathSymbol): TokenizeResult;

  solve(settings: Settings, ...args: number[]): number {
    return this.func(settings, ...args);
  }
}
