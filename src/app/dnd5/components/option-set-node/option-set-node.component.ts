import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OptionSetAbility } from '@app/dnd5/models/options/option-set-ability';
import { OptionSetAbilityBonus } from '@app/dnd5/models/options/option-set-ability-bonus';
import { OptionSetAction } from '@app/dnd5/models/options/option-set-action';
import { OptionSetAlignment } from '@app/dnd5/models/options/option-set-alignment';
import { OptionSetBreath } from '@app/dnd5/models/options/option-set-breath';
import { OptionSetChoice } from '@app/dnd5/models/options/option-set-choice';
import { OptionSetCounted } from '@app/dnd5/models/options/option-set-counted';
import { OptionSetDamage } from '@app/dnd5/models/options/option-set-damage';
import { OptionSetMultiple } from '@app/dnd5/models/options/option-set-multiple';
import { OptionSetReference } from '@app/dnd5/models/options/option-set-reference';
import { OptionSetString } from '@app/dnd5/models/options/option-set-string';
import { ChoiceComponent } from '../choice/choice.component';

@Component({
  selector: 'dnd5-option-set-node',
  imports: [CommonModule, ChoiceComponent],
  templateUrl: './option-set-node.component.html'
})
export class OptionSetNodeComponent {

  @Input() option: OptionSetReference | OptionSetAction | OptionSetMultiple | OptionSetChoice | OptionSetString | OptionSetAlignment | OptionSetCounted | OptionSetAbility | OptionSetAbilityBonus | OptionSetBreath | OptionSetDamage = new OptionSetReference();

  public getItem() {
    return (this.option as OptionSetReference).item;
  }

  public getItems() {
    return (this.option as OptionSetMultiple).items;
  }

  public getOf() {
    return (this.option as OptionSetCounted).of;
  }

  public getCount() {
    return (this.option as OptionSetCounted).count;
  }

  public getChoice() {
    return (this.option as OptionSetChoice).choice;
  }

}
