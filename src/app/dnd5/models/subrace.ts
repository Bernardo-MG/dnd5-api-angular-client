import { AbilityBonus } from "./stats/ability-bonus";
import { Choice } from "./options/choice";
import { Reference } from "./info/reference";

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