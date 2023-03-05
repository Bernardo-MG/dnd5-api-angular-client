import { Choice } from "./choice";
import { Feature as BackgroundFeature } from "./background-feature";
import { Option } from "./option";
import { PersonalityTrait } from "./personality-trait";
import { Reference } from "./reference";

export class Background {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string = '';
    starting_proficiencies: Reference[] = [];
    starting_equipment: Reference[] = [];
    starting_equipment_options: Option = new Option();
    language_options: Option = new Option();
    feature: BackgroundFeature = new BackgroundFeature();
    personality_traits: PersonalityTrait = new PersonalityTrait();
    ideals: Choice = new Choice();
    bonds: Choice = new Choice();
    flaws: Choice = new Choice();
}