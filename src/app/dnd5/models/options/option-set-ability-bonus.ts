import { Reference } from '../info/reference';

export class OptionSetAbilityBonus {
    option_type: string = '';
    ability_score: Reference = new Reference();
    bonus: number = 0;
}