import { Reference } from './reference';
import { MultiClassing } from './multiclassing';
import { ProficiencyChoice } from './proficiency-choice';
import { StartingEquipment } from './starting-equipment';
import { StartingEquipmentOption } from './starting-equipment-option';

export class Charclass {
    index: string = '';
    name: string = '';
    hit_die: number = 0;
    multi_classing: MultiClassing = new MultiClassing();
    proficiency_choices: ProficiencyChoice[] = [];
    proficiencies: Reference[] = [];
    saving_throws: Reference[] = [];
    starting_equipment: StartingEquipment[] = [];
    starting_equipment_options: StartingEquipmentOption[] = [];
    class_levels: string = '';
    subclasses: Reference[] = [];
    url: string = '';
}