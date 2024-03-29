import WorkoutItem from "./workout-item";

type Props = {
    name: string;
    items: WorkoutItem[];
};

class Workout {
    private name: string;
    private items: WorkoutItem[];
    private current: WorkoutItem;

    constructor({name, items}: Props) {
        this.name = name;
        this.items = items;
    }

    public start() {

    }

    public stop() {

    }

    public pause() {

    }

    public next() {

    }

    public previous() {

    }

    public getCurrentItem() {

    }
};

export default Workout;