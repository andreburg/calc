import { HistoricalCalculation, HistoricalCalculationSchema } from "../entities/models/historical-calculation";

export class HistoricalCalculationService {
  create(entity: HistoricalCalculationSchema) {
    const calculations = JSON.parse(window.localStorage.getItem("calculation") || "[]") as HistoricalCalculation[];
    const id = Math.max(...calculations.map((calculation) => calculation.id), 0) + 1;
    const timestamp = new Date();
    window.localStorage.setItem("calculation", JSON.stringify([...calculations, { id, ...entity, timestamp }]));
  }

  deleteById(id: number) {
    const calculations = JSON.parse(window.localStorage.getItem("calculation") || "[]") as HistoricalCalculation[];
    window.localStorage.setItem("calculation", JSON.stringify(calculations.filter((calculation) => calculation.id !== id)));
  }

  getAll() {
    return JSON.parse(window.localStorage.getItem("calculation") || "[]") as HistoricalCalculation[];
  }
}

export const historicalCalculationService = new HistoricalCalculationService();
