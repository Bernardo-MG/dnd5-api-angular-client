import { ClassSpecificLevelSorcererSpellSlots } from "./class-specific-level-sorcerer-spell-slots";

export class ClassSpecificLevelsSorcerer {
    sorcery_points: number = 0;
    metamagic_known: number = 0;
    creating_spell_slots: ClassSpecificLevelSorcererSpellSlots = new ClassSpecificLevelSorcererSpellSlots();
}