export class SpellcastingLevels {
  constructor(
    public cantrips_known = 0,
    public spells_known = 0,
    public spell_slots_level_1 = 0,
    public spell_slots_level_2 = 0,
    public spell_slots_level_3 = 0,
    public spell_slots_level_4 = 0,
    public spell_slots_level_5 = 0,
    public spell_slots_level_6 = 0,
    public spell_slots_level_7 = 0,
    public spell_slots_level_8 = 0,
    public spell_slots_level_9 = 0
  ) { }

  get spellcaster() {
    return (this.cantrips_known > 0) || (this.spells_known > 0);
  }
}