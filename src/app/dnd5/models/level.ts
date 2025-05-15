import { LevelFeature } from "./level-feature";
import { SpellcastingLevels } from "./spellcasting-levels";

export class Level {
  constructor(
    public level = 0,
    public proficiency_bonus = 0,
    public features: LevelFeature[] = [],
    public spellcasting = new SpellcastingLevels()
  ) { }
}