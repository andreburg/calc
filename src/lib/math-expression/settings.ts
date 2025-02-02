export const ANGLE_UNITS = ["DEG", "RAD"] as const;

export type Settings = {
  angle: (typeof ANGLE_UNITS)[number];
};

export function angleUnitConversion(unit: (typeof ANGLE_UNITS)[number]) {
  const angleUnitMap = {
    DEG: Math.PI / 180,
    RAD: 1,
  };
  return angleUnitMap[unit];
}
