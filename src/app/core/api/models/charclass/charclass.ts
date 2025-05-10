import { Choice } from '../options/choice';
import { Multiclassing } from './multiclassing';
import { Reference } from '../info/reference';
import { Spellcasting } from './spellcasting';
import { StartingEquipment } from '../equipment/starting-equipment';

export class Charclass {
  index = '';
  name = '';
  url = '';
  hit_die = 0;
  class_levels = '';
  multi_classing = new Multiclassing();
  spellcasting = new Spellcasting();
  spells = '';
  starting_equipment: StartingEquipment[] = [];
  starting_equipment_options: Choice[] = [];
  proficiency_choices: Choice[] = [];
  proficiencies: Reference[] = [];
  saving_throws: Reference[] = [];
  subclasses: Reference[] = [];
}