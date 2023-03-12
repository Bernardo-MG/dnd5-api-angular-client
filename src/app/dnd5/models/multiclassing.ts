import { Prerequisite } from "./prerequisite";
import { Choice } from "./options/choice";
import { Reference } from "./info/reference";

export class Multiclassing {
    prerequisites: Prerequisite[] = [];
    prerequisite_options: Choice[] = [];
    proficiencies: Reference[] = [];
    proficiency_choices: Choice[] = [];
}