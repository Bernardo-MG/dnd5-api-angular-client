import { OptionSetAbility } from './option-set-ability';
import { OptionSetAbilityBonus } from './option-set-ability-bonus';
import { OptionSetAction } from './option-set-action';
import { OptionSetAlignment } from './option-set-alignment';
import { OptionSetBreath } from './option-set-breath';
import { OptionSetChoice } from './option-set-choice';
import { OptionSetDamage } from './option-set-damage';
import { OptionSetReference } from './option-set-reference';
import { OptionSetMultiple } from './option-set-multiple';
import { OptionSetCounted } from './option-set-counted';
import { OptionSetString } from './option-set-string';

export class OptionSetOptionArray {
    option_set_type = 'options_array';
    options: (OptionSetReference | OptionSetAction | OptionSetMultiple | OptionSetChoice | OptionSetString | OptionSetAlignment | OptionSetCounted | OptionSetAbility | OptionSetAbilityBonus | OptionSetBreath | OptionSetDamage)[] = [];
}