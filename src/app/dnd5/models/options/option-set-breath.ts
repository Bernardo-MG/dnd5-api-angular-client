import { Damage } from '../stats/damage';
import { Dc } from '../stats/dc';

export class OptionSetBreath {
    option_type: string = '';
    name: string='';
    dc: Dc = new Dc();
    damage: Damage[] = [];
}