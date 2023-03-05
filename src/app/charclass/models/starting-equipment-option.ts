import { OptionSet } from "./option-set";

export class StartingEquipmentOption {
    choose: number = 0;
    desc: string = '';
    type: string = '';
    from: OptionSet = new OptionSet();
}