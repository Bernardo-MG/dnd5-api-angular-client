import { Proficiency } from './proficiency';
import { ProficiencyChoice } from './proficiency-choice';
import { SavingThrow } from './saving-throw';
import { Subclass } from './subclass';

export interface Charclass {
    index: string;
    name: string;
    hit_die: number;
    proficiency_choices: ProficiencyChoice[];
    proficiencies: Proficiency[];
    saving_throws: SavingThrow[];
    starting_equipment: any;
    class_levels: any;
    subclasses: Subclass[];
    url: string;
}