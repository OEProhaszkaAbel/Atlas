export interface Weight {
  value: number;
  unit: UnitSystem;
}

export type UnitSystem = 'kg' | 'lb';
export const EMPTY_WEIGHT: Weight = {
  value: 0,
  unit: 'kg',
};

export const DEFAULT_UNIT_SYSTEM: UnitSystem = 'kg';
