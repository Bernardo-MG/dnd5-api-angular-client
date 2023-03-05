import { OptionSet } from "./option-set";

export class Choice {
    desc: string = '';
    choose: number = 0;
    type: string = '';
    from: OptionSet = new OptionSet();
}