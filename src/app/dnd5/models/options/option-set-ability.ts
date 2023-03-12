import { Reference } from "../info/reference";

export class OptionSetAbility {
    option_type: string = '';
    ability_score: Reference = new Reference();
    minimum_score: number = 0;
}