import { OptionSetAbility } from './option-set-ability';
import { OptionSetAbilityBonus } from './option-set-ability-bonus';
import { OptionSetAction } from './option-set-action';
import { OptionSetAlignment } from './option-set-alignment';
import { OptionSetBreath } from './option-set-breath';
import { OptionSetChoice } from './option-set-choice';
import { OptionSetDamage } from './option-set-damage';
import { OptionSetItem } from './option-set-item';
import { OptionSetItems } from './option-set-items';
import { OptionSetOf } from './option-set-of';
import { OptionSetString } from './option-set-string';

export class OptionSetOptionArray {
    option_set_type: string = '';
    options: OptionSetItem | OptionSetAction | OptionSetItems | OptionSetChoice | OptionSetString | OptionSetAlignment | OptionSetOf | OptionSetAbility | OptionSetAbilityBonus | OptionSetBreath | OptionSetDamage = new OptionSetItem();
}