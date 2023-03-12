import { ArmorTypes } from "./enums/armor-types";
import { Reference } from "./reference";

export class ArmorClassSpell {
    type: ArmorTypes = ArmorTypes.spell;
    value: number = 0;
    spell: Reference = new Reference();
    desc: string = '';
}