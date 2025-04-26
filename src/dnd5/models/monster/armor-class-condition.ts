import { ArmorTypes } from "../enums/armor-types";
import { Reference } from "../info/reference";

export class ArmorConditionSpell {
    type = ArmorTypes.condition;
    value = 0;
    condition = new Reference();
    desc = '';
}