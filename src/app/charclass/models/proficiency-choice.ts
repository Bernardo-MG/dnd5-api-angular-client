import { OptionSet } from './option-set';

export class ProficiencyChoice {
    choose: number = 0;
    desc: string = '';
    type: string = '';
    from: OptionSet = new OptionSet();
}