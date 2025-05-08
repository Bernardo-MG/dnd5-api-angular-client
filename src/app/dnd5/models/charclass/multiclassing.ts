import { Reference } from "../info/reference";
import { Choice } from "../options/choice";
import { Prerequisite } from "./prerequisite";

export class Multiclassing {
  prerequisites: Prerequisite[] = [];
  prerequisite_options: Choice[] = [];
  proficiencies: Reference[] = [];
  proficiency_choices: Choice[] = [];
}