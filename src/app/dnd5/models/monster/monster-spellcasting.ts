import { AbilityUsage } from "./ability-usage";
import { Reference } from "../info/reference";

export class MonsterSpellcasting {
    ability = new Reference();
    dc = 0;
    modifier = 0;
    components_required: string[] = [];
    school = '';
    slots: any;
    spells: AbilityUsage[] = [];
}