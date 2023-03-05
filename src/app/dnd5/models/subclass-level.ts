import { Reference } from "./reference";
import { SpellcastingLevels } from "./spellcasting-levels";

export class SubclassLevel {
    index: string = '';
    url: string = '';
    level: number = 0;
    ability_score_bonuses: number = 0;
    prof_bonus: number = 0;
    features: Reference[] = [];
    spellcasting: SpellcastingLevels = new SpellcastingLevels();
}