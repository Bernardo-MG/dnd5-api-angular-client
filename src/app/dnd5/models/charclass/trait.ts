import { Reference } from "../info/reference";
import { Choice } from "../options/choice";

export class Trait {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  races: Reference[] = [];
  subraces: Reference[] = [];
  proficiencies: Reference[] = [];
  proficiency_choices = new Choice();
  language_options = new Choice();
  trait_specific = new Choice();
}