import { Reference } from "../info/reference";
import { SpellPrerequisite } from "./spell-prerequisite";

export class SubclassSpell {
    prerequisites: SpellPrerequisite[] = [];
    spell = new Reference();
}