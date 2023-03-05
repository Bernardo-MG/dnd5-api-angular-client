import { AbilityBonus } from "./ability-bonus";
import { Reference } from "./reference";

export class Subrace {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string = '';
    race: Reference = new Reference();
    ability_bonuses: AbilityBonus = new AbilityBonus();
    starting_proficiencies: Reference[] = [];
    languages: Reference[] = [];
    language_options: any;
    racial_traits: Reference[] = [];
}