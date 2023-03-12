import { Choice } from '../options/choice';
import { Multiclassing } from '../multiclassing';
import { Reference } from '../info/reference';
import { Spellcasting } from '../spellcasting';
import { StartingEquipment } from '../equipment/starting-equipment';

export class Charclass {
    index: string = '';
    name: string = '';
    url: string = '';
    hit_die: number = 0;
    class_levels: string = '';
    multi_classing: Multiclassing = new Multiclassing();
    spellcasting: Spellcasting = new Spellcasting();
    spells: string = '';
    starting_equipment: StartingEquipment[] = [];
    starting_equipment_options: Choice[] = [];
    proficiency_choices: Choice[] = [];
    proficiencies: Reference[] = [];
    saving_throws: Reference[] = [];
    subclasses: Reference[] = [];
}