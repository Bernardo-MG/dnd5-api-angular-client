import { Info } from "../info/info";
import { Reference } from "../info/reference";
import { Choice } from "../options/choice";
import { PersonalityTrait } from "./personality-trait";

export class Background {
    index = '';
    name = '';
    url = '';
    starting_proficiencies: Reference[] = [];
    starting_equipment: Reference[] = [];
    starting_equipment_options = new Choice();
    language_options = new Choice();
    feature = new Info();
    personality_traits = new PersonalityTrait();
    ideals = new Choice();
    bonds = new Choice();
    flaws = new Choice();
}