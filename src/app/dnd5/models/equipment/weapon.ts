import { Cost } from "./cost";
import { Damage } from "../stats/damage";
import { Range } from "./range";
import { Reference } from "../info/reference";

export class Weapon {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    equipment_category: Reference = new Reference();
    weapon_category: string = '';
    weapon_range: string = '';
    category_range: string = '';
    range: Range = new Range();
    damage: Damage = new Damage();
    two_handed_damage: Damage = new Damage();
    properties: Reference[] = [];
    cost: Cost = new Cost();
    weight: number = 0;
}