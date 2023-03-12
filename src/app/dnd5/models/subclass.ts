import { Reference } from "./info/reference";
import { SubclassSpell } from "./subclass-spell";

export class Subclass {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    class: Reference = new Reference();
    subclass_flavor: string = '';
    subclass_levels: string = '';
    spells: SubclassSpell[] = [];
}