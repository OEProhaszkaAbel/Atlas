import { RepRange } from './RepRange';
import { RestTime } from './RestTime';

export interface ExerciseSet {
  id: number;
  isCompleted: boolean;
  set_type_id: number;
  weight: number;
  reps: number;
  repRange: RepRange;
  restTime: RestTime;
}
