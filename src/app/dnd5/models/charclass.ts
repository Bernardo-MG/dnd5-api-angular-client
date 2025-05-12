import { StartingEquipment } from "@app/core/api/models/equipment/starting-equipment";
import { Reference } from "@app/core/api/models/info/reference";
import { Choice } from "@app/core/api/models/options/choice";

export class Charclass {
  constructor(
    public name = '',
    public hit_die = 0,
    public starting_equipment: StartingEquipment[] = [],
    public starting_equipment_options: Choice[] = [],
    public proficiency_choices: Choice[] = [],
    public proficiencies: Reference[] = []
  ) { }
}