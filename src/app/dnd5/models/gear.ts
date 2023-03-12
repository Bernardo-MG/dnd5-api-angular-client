import { Cost } from "./cost";
import { Reference } from "./info/reference";

export class Armor {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    equipment_category: Reference = new Reference();
    gear_category: Reference = new Reference();
    cost: Cost = new Cost();
    weight: number = 0;
}