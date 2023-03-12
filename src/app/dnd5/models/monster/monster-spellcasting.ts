import { AbilityUsage } from "./ability-usage";
import { Reference } from "../info/reference";

export class MonsterSpellcasting {
    ability: Reference = new Reference();
    dc: number = 0;
    modifier: number = 0;
    components_required: string[] = [];
    school: string = '';
    slots: any;
    spells: AbilityUsage[] = [];
}