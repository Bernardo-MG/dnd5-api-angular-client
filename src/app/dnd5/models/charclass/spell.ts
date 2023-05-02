import { SpellComponents } from "../enums/spell-components";
import { Reference } from "../info/reference";
import { AreaOfEffect } from "./area-of-effect";
import { DamageAtLevel } from "./damage-at-level";
import { DamageAtSlot } from "./damage-at-slot";

export class Spell {
    index = '';
    name = '';
    url = '';
    desc: string[] = [];
    higher_level: string[] = [];
    range = '';
    components: SpellComponents[] = [];
    material = '';
    area_of_effect = new AreaOfEffect();
    ritual = false;
    duration = '';
    concentration = false;
    casting_time = '';
    level = 0;
    attack_type = '';
    damage: DamageAtLevel | DamageAtSlot = new DamageAtLevel();
    school = new Reference();
    classes: Reference[] = [];
    subclasses: Reference[] = [];
}