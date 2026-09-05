export interface SetType {
  id: number;
  name: string;
  description: string;
}

export const SET_TYPES: SetType[] = [
  {
    id: 1,
    name: 'Normal Set',
    description: 'A standard set of exercises performed in a workout.',
  },
  {
    id: 2,
    name: 'Drop Set',
    description: 'A set where the weight is reduced after reaching failure.',
  },
  {
    id: 3,
    name: 'Super Set',
    description: 'Two exercises performed in succession targeting opposing muscle groups.',
  },
  {
    id: 4,
    name: 'Warmup Set',
    description: 'A set performed at a lower intensity to prepare the muscles for heavier lifting.',
  },
];

export const DEFAULT_SET_TYPE: SetType =
  SET_TYPES.find((setType) => setType.name === 'Normal Set') || SET_TYPES[0];
