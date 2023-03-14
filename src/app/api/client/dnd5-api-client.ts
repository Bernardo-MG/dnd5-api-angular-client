import { CharacterClass } from "./dsl/charclass/character-class";

export interface Dnd5ApiClient {
  
  characterClass(): CharacterClass;

}