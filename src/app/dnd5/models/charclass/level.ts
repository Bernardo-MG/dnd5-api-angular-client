import { Reference } from "../info/reference";
import { ClassSpecificLevelBarbarian } from "./class-specific-level-barbarian";
import { ClassSpecificLevelBard } from "./class-specific-level-bard";
import { ClassSpecificLevelCleric } from "./class-specific-level-cleric";
import { ClassSpecificLevelDruid } from "./class-specific-level-druid";
import { ClassSpecificLevelFighter } from "./class-specific-level-fighter";
import { ClassSpecificLevelMonk } from "./class-specific-level-monk";
import { ClassSpecificLevelPaladin } from "./class-specific-level-paladin";
import { ClassSpecificLevelRanger } from "./class-specific-level-ranger";
import { ClassSpecificLevelRogue } from "./class-specific-level-rogue";
import { ClassSpecificLevelsSorcerer } from "./class-specific-level-sorcerer";
import { ClassSpecificLevelWarlock } from "./class-specific-level-warlock";
import { ClassSpecificLevelWizard } from "./class-specific-level-wizard";
import { SpellcastingLevels } from "./spellcasting-levels";

export class Level {
    index = '';
    url = '';
    level = 0;
    ability_score_bonuses = 0;
    prof_bonus = 0;
    features: Reference[] = [];
    spellcasting = new SpellcastingLevels();
    class_specific: ClassSpecificLevelBarbarian | ClassSpecificLevelBard | ClassSpecificLevelCleric | ClassSpecificLevelDruid | ClassSpecificLevelFighter | ClassSpecificLevelMonk | ClassSpecificLevelPaladin | ClassSpecificLevelRanger | ClassSpecificLevelRogue | ClassSpecificLevelsSorcerer | ClassSpecificLevelWarlock | ClassSpecificLevelWizard = new ClassSpecificLevelBarbarian();
}