export interface Exercise {
    id: number;
    name: string;
}

export interface ExerciseVariation {
    id: number;
    equipment_id: number[];
    exercise_id: number;
    method_id: number[];
    video_path: string;
    primary_muscles: MuscleType[];
    secondary_muscles: MuscleType[];
}

export interface MuscleType {
    id: number;
    name: string;
}

export interface CompletedExercise {
    variation_id: number;
    set_type_id: number;
    weight: number;
    reps: number;
}