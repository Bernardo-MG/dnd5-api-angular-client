import { Cost } from "./cost";
import { Reference } from "./reference";

export class EquipmentPack {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    equipment_category: Reference = new Reference();
    gear_category: Reference = new Reference();
    cost: Cost = new Cost();
    contents: Reference[] = [];
}