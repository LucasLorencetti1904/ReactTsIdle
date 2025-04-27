import Mob from "./Mob";

export default class Goblin extends Mob {
    protected get baseLevel(): number {
        return 1;
    }
}