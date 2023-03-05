import { Reference } from "./reference";

export class Trait {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    races: Reference[] = [];
    subraces: Reference[] = [];
    proficiencies: Reference[] = [];
    proficiency_choices: any;
    language_options: any;
    trait_specific: any;
}