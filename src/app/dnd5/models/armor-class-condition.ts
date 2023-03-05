import { ArmorClassConditionType } from "./armor-class-condition-type";
import { Reference } from "./reference";

export class ArmorConditionSpell {
    type: ArmorClassConditionType = ArmorClassConditionType.condition;
    value: number = 0;
    condition: Reference = new Reference();
    desc: string = '';
}