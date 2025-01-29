export abstract class Calculation {
  constructor(protected func: (...args: number[]) => number) {}

  abstract getArgs(expression: string, symbol: string, index: number): string[];

  solve(...args: number[]): number {
    return this.func(...args);
  }
}

export type CalculationsMap = { [key: string]: Calculation };
