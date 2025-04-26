import { Damage } from "../stats/damage";
import { Dc } from "../stats/dc";
import { AbilityUsage } from "./ability-usage";
import { MonsterSpellcasting } from "./monster-spellcasting";

export class MonsterSpecialAbility {
    name = '';
    desc = '';
    attack_bonus = 0;
    damage: Damage[] = [];
    dc = new Dc();
    spellcasting = new MonsterSpellcasting();
    usage = new AbilityUsage();
}