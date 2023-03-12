import { Attack } from "../stats/attack";
import { Choice } from "../options/choice";
import { Damage } from "../stats/damage";
import { Dc } from "../stats/dc";
import { MonsterActionOptions } from "./monster-action-options";
import { MonsterActionType } from "./monster-action-type";

export class MonsterAction {
    name: string = '';
    desc: string = '';
    action_options: MonsterActionOptions = new MonsterActionOptions();
    actions: MonsterActionType[] = [];
    options: Choice = new Choice();
    multiattack_type: string = '';
    attack_bonus: number = 0;
    dc: Dc = new Dc();
    attacks: Attack[] = [];
    damage: Damage[] = [];
}