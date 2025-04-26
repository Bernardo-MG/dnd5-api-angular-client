import { Reference } from "../info/reference";
import { Damage } from "../stats/damage";
import { Cost } from "./cost";
import { Range } from "./range";

export class Weapon {
    index = '';
    name = '';
    url = '';
    desc: string[] = [];
    equipment_category = new Reference();
    weapon_category = '';
    weapon_range = '';
    category_range = '';
    range = new Range();
    damage = new Damage();
    two_handed_damage = new Damage();
    properties: Reference[] = [];
    cost = new Cost();
    weight = 0;
}