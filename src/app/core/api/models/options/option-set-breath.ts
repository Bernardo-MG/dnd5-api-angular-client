import { Damage } from '../stats/damage';
import { Dc } from '../stats/dc';

export class OptionSetBreath {
  option_type = '';
  name = '';
  dc = new Dc();
  damage: Damage[] = [];
}