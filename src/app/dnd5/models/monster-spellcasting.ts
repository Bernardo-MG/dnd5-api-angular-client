import { AbilityUsage } from "./monster-spell-usage";
import { Reference } from "./reference";

export class MonsterSpellcasting {
    ability: Reference = new Reference();
    dc: number = 0;
    modifier: number = 0;
    components_required: string[] = [];
    school: string = '';
    slots: any;
    spells: AbilityUsage[] = [];
}