import { AbilityBonus } from "./ability-bonus";
import { Choice } from "./choice";
import { Reference } from "./reference";

export class Race {
    index: string = '';
    name: string = '';
    url: string = '';
    speed: number = 0;
    ability_bonuses: AbilityBonus[] = [];
    alignment: string = '';
    age: string = '';
    size: string = '';
    size_description: string = '';
    starting_proficiencies: Reference[] = [];
    starting_proficiency_options: Choice = new Choice();
    languages: Reference[] = [];
    language_desc: string = '';
    traits: Reference[] = [];
    subraces: Reference[] = [];
}