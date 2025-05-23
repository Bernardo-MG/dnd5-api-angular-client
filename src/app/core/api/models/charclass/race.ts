import { Reference } from "../info/reference";
import { Choice } from "../options/choice";
import { AbilityBonus } from "../stats/ability-bonus";

export class Race {
  index = '';
  name = '';
  url = '';
  speed = 0;
  ability_bonuses: AbilityBonus[] = [];
  alignment = '';
  age = '';
  size = '';
  size_description = '';
  starting_proficiencies: Reference[] = [];
  starting_proficiency_options = new Choice();
  languages: Reference[] = [];
  language_desc = '';
  traits: Reference[] = [];
  subraces: Reference[] = [];
}