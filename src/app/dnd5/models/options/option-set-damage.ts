import { Reference } from "../info/reference";

export class OptionSetDamage {
    option_type: string = '';
    damage_type: Reference = new Reference();
    damage_dice: string = '';
    notes: string = '';
}