import { ArmorTypes } from "./enums/armor-types";
import { Reference } from "./reference";

export class ArmorConditionSpell {
    type: ArmorTypes = ArmorTypes.condition;
    value: number = 0;
    condition: Reference = new Reference();
    desc: string = '';
}