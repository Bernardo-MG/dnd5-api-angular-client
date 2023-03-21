import { ArmorTypes } from "../enums/armor-types";
import { Reference } from "../info/reference";

export class ArmorClassSpell {
    type = ArmorTypes.spell;
    value = 0;
    spell = new Reference();
    desc = '';
}