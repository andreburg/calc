import { Settings } from "../../../lib/math-expression/settings";
import { StateObject } from "../../../utils/state-object";

export const settings = new StateObject<Settings>({ angle: "DEG" });
    