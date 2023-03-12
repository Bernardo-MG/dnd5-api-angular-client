import { Damage } from "./damage";
import { Dc } from "./dc";
import { AbilityUsage } from "./monster-spell-usage";
import { MonsterSpellcasting } from "./monster-spellcasting";

export class MonsterSpecialAbility {
    name: string = '';
    desc: string = '';
    attack_bonus: number = 0;
    damage: Damage[] = [];
    dc: Dc = new Dc();
    spellcasting: MonsterSpellcasting = new MonsterSpellcasting();
    usage: AbilityUsage = new AbilityUsage();
}