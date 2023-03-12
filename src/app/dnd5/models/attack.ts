import { Damage } from "./damage";
import { Dc } from "./dc";

export class Attack {
    name: string = '';
    dc: Dc = new Dc();
    damage: Damage = new Damage();
}