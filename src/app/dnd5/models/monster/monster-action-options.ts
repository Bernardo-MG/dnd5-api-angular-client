import { OptionSetEquipmentCategory } from "../options/option-set-equipment-category";
import { OptionSetOptionArray } from "../options/option-set-option-array";
import { OptionSetResourceList } from "../options/option-set-resource-list";

export class MonsterActionOptions {
    desc: string = '';
    choose: number = 0;
    type: string = '';
    from: OptionSetOptionArray | OptionSetEquipmentCategory | OptionSetResourceList = new OptionSetOptionArray();
}