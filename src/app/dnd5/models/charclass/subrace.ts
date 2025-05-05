import { Reference } from "../info/reference";
import { Choice } from "../options/choice";
import { AbilityBonus } from "../stats/ability-bonus";

export class Subrace {
  index = '';
  name = '';
  url = '';
  desc = '';
  race = new Reference();
  ability_bonuses: AbilityBonus[] = [];
  starting_proficiencies: Reference[] = [];
  languages: Reference[] = [];
  language_options = new Choice();
  racial_traits: Reference[] = [];
}