import { Reference } from "../info/reference";
import { SubclassSpell } from "./subclass-spell";

export class Subclass {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  class = new Reference();
  subclass_flavor = '';
  subclass_levels = '';
  spells: SubclassSpell[] = [];
}