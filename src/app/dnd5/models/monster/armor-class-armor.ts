import { ArmorTypes } from "../enums/armor-types";
import { Reference } from "../info/reference";

export class ArmorClassArmor {
    type: ArmorTypes = ArmorTypes.armor;
    value: number = 0;
    armor: Reference[] = [];
    desc: string = '';
}