import { SpellComponents } from "../enums/spell-components";
import { Reference } from "../info/reference";
import { AreaOfEffect } from "./area-of-effect";
import { DamageAtLevel } from "./damage-at-level";
import { DamageAtSlot } from "./damage-at-slot";

export class Spell {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    higher_level: string[] = [];
    range: string = '';
    components: SpellComponents[] = [];
    material: string = '';
    area_of_effect: AreaOfEffect = new AreaOfEffect();
    ritual: boolean = false;
    duration: string = '';
    concentration: boolean = false;
    casting_time: string = '';
    level: number = 0;
    attack_type: string = '';
    damage: DamageAtLevel | DamageAtSlot = new DamageAtLevel();
    school: Reference = new Reference();
    classes: Reference[] = [];
    subclasses: Reference[] = [];
}