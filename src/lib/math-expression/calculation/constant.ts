import { Calculation } from "./calculation";

class Constant extends Calculation {
  getArgs(): string[] {
    return [];
  }
}

export const constants = {
  π: new Constant(() => Math.PI),
  e: new Constant(() => Math.E),
} as const;
