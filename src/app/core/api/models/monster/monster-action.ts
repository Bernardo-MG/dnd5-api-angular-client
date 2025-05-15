import { Choice } from "../options/choice";
import { Attack } from "../stats/attack";
import { Damage } from "../stats/damage";
import { Dc } from "../stats/dc";
import { MonsterActionOptions } from "./monster-action-options";
import { MonsterActionType } from "./monster-action-type";

export class MonsterAction {
  name = '';
  desc = '';
  action_options = new MonsterActionOptions();
  actions: MonsterActionType[] = [];
  options = new Choice();
  multiattack_type = '';
  attack_bonus = 0;
  dc = new Dc();
  attacks: Attack[] = [];
  damage: Damage[] = [];
}