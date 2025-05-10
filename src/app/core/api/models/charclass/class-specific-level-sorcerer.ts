import { ClassSpecificLevelSorcererSpellSlots } from "./class-specific-level-sorcerer-spell-slots";

export class ClassSpecificLevelsSorcerer {
  sorcery_points = 0;
  metamagic_known = 0;
  creating_spell_slots = new ClassSpecificLevelSorcererSpellSlots();
}