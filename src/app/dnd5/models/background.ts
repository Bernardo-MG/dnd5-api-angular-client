import { Choice } from "./options/choice";
import { Info } from "./info";
import { PersonalityTrait } from "./personality-trait";
import { Reference } from "./info/reference";

export class Background {
    index: string = '';
    name: string = '';
    url: string = '';
    starting_proficiencies: Reference[] = [];
    starting_equipment: Reference[] = [];
    starting_equipment_options: Choice = new Choice();
    language_options: Choice = new Choice();
    feature: Info = new Info();
    personality_traits: PersonalityTrait = new PersonalityTrait();
    ideals: Choice = new Choice();
    bonds: Choice = new Choice();
    flaws: Choice = new Choice();
}