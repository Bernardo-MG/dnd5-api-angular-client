import { Cost } from "./cost";
import { Reference } from "./info/reference";

export class Armor {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    equipment_category: Reference = new Reference();
    armor_category: string = '';
    armor_class: any = undefined;
    str_minimum: number = 0;
    stealth_disadvantage: boolean = false;
    cost: Cost = new Cost();
    weight: number = 0;
}