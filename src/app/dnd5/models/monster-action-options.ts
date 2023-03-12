import { OptionSetEquipmentCategory } from "./option-set-equipment-category";
import { OptionSetOptionArray } from "./option-set-option-array";
import { OptionSetResourceList } from "./option-set-resource-list";

export class MonsterActionOptions {
    desc: string = '';
    choose: number = 0;
    type: string = '';
    from: OptionSetOptionArray | OptionSetEquipmentCategory | OptionSetResourceList = new OptionSetOptionArray();
}