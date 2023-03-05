import { ArmorClassArmorType } from "./armor-class-armor-type";
import { Reference } from "./reference";

export class ArmorClassArmor {
    type: ArmorClassArmorType = ArmorClassArmorType.armor;
    value: number = 0;
    armor: Reference[] = [];
    desc: string = '';
}