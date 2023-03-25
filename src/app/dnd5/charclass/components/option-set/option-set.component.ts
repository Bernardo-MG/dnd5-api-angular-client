import { Component, Input } from '@angular/core';
import { OptionSetEquipmentCategory } from '@app/dnd5/models/options/option-set-equipment-category';
import { OptionSetOptionArray } from '@app/dnd5/models/options/option-set-option-array';
import { OptionSetResourceList } from '@app/dnd5/models/options/option-set-resource-list';

@Component({
  selector: 'dnd5-option-set',
  templateUrl: './option-set.component.html',
  styleUrls: ['./option-set.component.sass']
})
export class OptionSetComponent {

  @Input() public optionSet: OptionSetOptionArray | OptionSetEquipmentCategory | OptionSetResourceList = new OptionSetOptionArray();

  public isOptionArray() {
    return this.optionSet.option_set_type === 'options_array';
  }

  public getOptions() {
    return (this.optionSet as OptionSetOptionArray).options;
  }

  public getReference(option: any) {
    return option.item;
  }

}
