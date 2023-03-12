import { Damage } from '../damage';
import { Dc } from '../dc';

export class OptionSetBreath {
    option_type: string = '';
    name: string='';
    dc: Dc = new Dc();
    damage: Damage[] = [];
}