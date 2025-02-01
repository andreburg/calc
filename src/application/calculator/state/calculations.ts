import { StateObject } from "../../../utils/state-object";
import { historicalCalculationService } from "../../../services/historical-calculation-service";

export const calculations = new StateObject(historicalCalculationService.getAll());
