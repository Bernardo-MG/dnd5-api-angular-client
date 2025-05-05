import { Reference } from "../info/reference";
import { AbilityUsage } from "./ability-usage";

export class MonsterSpellcasting {
  ability = new Reference();
  dc = 0;
  modifier = 0;
  components_required: string[] = [];
  school = '';
  slots: any;
  spells: AbilityUsage[] = [];
}