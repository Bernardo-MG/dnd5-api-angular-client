import { OptionSetEquipmentCategory } from "./option-set-equipment-category";
import { OptionSetOptionArray } from "./option-set-option-array";
import { OptionSetResourceList } from "./option-set-resource-list";

export class Choice {
    desc = '';
    choose = 0;
    type = '';
    from: OptionSetOptionArray | OptionSetEquipmentCategory | OptionSetResourceList = new OptionSetOptionArray();
}