export interface WorkoutProgram {
    id?: number;
    name: string;
    description: string;
    created_by?: number | null;
    public: boolean;
}