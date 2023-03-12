import { Choice } from "./options/choice";
import { Reference } from "./reference";

export class Trait {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    races: Reference[] = [];
    subraces: Reference[] = [];
    proficiencies: Reference[] = [];
    proficiency_choices: Choice = new Choice();
    language_options: Choice = new Choice();
    trait_specific: Choice = new Choice();
}