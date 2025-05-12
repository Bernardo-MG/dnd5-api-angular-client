import { StartingEquipment } from "@app/core/api/models/equipment/starting-equipment";
import { Choice } from "@app/core/api/models/options/choice";
import { Level } from "./level";
import { Proficiency } from "./proficiency";

export class Charclass {
  constructor(
    public name = '',
    public hit_die = 0,
    public starting_equipment: StartingEquipment[] = [],
    public starting_equipment_options: Choice[] = [],
    public proficiency_choices: Choice[] = [],
    public proficiencies: Proficiency[] = [],
    public levels: Level[] = []
  ) { }
}