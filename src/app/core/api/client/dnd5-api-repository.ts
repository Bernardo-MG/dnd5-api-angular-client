import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";


export interface Dnd5Repository {
  
  characterClass(): CharacterClassQuery;

  proficiency(): ProficiencyQuery;

}