import { RepRange } from './RepRange';
import { RestTime } from './RestTime';
import { SetType } from './SetType';
import { Weight } from './Weight';

export interface ExerciseSet {
  id: number;
  isCompleted: boolean;
  setType: SetType;
  weight: Weight;
  reps: number;
  repRange: RepRange;
  restTime: RestTime;
  comment: string;
}
