import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

export interface Dnd5ApiClient {
  
  characterClass(): CharacterClassQuery;

  proficiency(): ProficiencyQuery;

}