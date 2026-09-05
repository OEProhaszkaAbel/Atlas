import { RepRange } from './RepRange';
import { RestTime } from './RestTime';
import { SetType } from './SetType';

export interface ExerciseSet {
  id: number;
  isCompleted: boolean;
  setType: SetType;
  weight: number;
  unit: UnitSystem;
  reps: number;
  repRange: RepRange;
  restTime: RestTime;
}

export type UnitSystem = 'kg' | 'lb';
