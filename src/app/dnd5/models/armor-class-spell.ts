import { ArmorClassSpellType } from "./armor-class-spell-type";
import { Reference } from "./reference";

export class ArmorClassSpell {
    type: ArmorClassSpellType = ArmorClassSpellType.spell;
    value: number = 0;
    spell: Reference = new Reference();
    desc: string = '';
}