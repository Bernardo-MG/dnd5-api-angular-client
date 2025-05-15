import { OptionSetEquipmentCategory } from "../options/option-set-equipment-category";
import { OptionSetOptionArray } from "../options/option-set-option-array";
import { OptionSetResourceList } from "../options/option-set-resource-list";

export class MonsterActionOptions {
  desc = '';
  choose = 0;
  type = '';
  from: OptionSetOptionArray | OptionSetEquipmentCategory | OptionSetResourceList = new OptionSetOptionArray();
}