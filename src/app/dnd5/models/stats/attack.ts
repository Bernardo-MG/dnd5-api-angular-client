import { Damage } from "./damage";
import { Dc } from "./dc";

export class Attack {
    name = '';
    dc = new Dc();
    damage = new Damage();
}