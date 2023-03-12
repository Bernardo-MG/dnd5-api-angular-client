import { AbilityBonus } from "./ability-bonus";
import { Choice } from "./choice";
import { Reference } from "./reference";

export class Subrace {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string = '';
    race: Reference = new Reference();
    ability_bonuses: AbilityBonus[] = [];
    starting_proficiencies: Reference[] = [];
    languages: Reference[] = [];
    language_options: Choice = new Choice();
    racial_traits: Reference[] = [];
}