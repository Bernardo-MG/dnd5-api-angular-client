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

  public isEquipment() {
    return this.optionSet.option_set_type === 'equipment_category';
  }

  public getOptions() {
    return (this.optionSet as OptionSetOptionArray).options;
  }

  public getItem(option: any) {
    return option.item;
  }

  public getItems(option: any) {
    return option.items;
  }

  public getOf(option: any) {
    return option.of;
  }

  public getCount(option: any) {
    return option.count;
  }

  public getEquipment() {
    return (this.optionSet as OptionSetEquipmentCategory).equipment_category;
  }

}
