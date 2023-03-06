import { Actions } from './actions';

export class OptionSetAction {
    option_type: string = '';
    action_name: string = '';
    count: number = 0;
    type: Actions = Actions.ability;
}