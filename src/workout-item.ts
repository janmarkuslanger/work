import Exercise from "./exercise"

type Props = {
    exercise: Exercise;
    repetitions?: number;
    rounds?: number;
    timeInSeconds?: number;
    pauseInSeconds?: number;
}

class WorkoutItem {
    private exercise: Exercise;
    private repetitions?: number;
    private rounds?: number;
    private timeInSeconds?: number;
    private pauseInSeconds?: number;

    public constructor({ exercise, repetitions, rounds, timeInSeconds, pauseInSeconds }: Props) {
        this.exercise = exercise;
        this.repetitions = repetitions; 
        this.rounds = rounds;
        this.timeInSeconds = timeInSeconds;
        this.pauseInSeconds = pauseInSeconds;
    }
};


export default WorkoutItem;