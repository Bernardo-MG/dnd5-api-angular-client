import { CharacterClass } from "./query/charclass/character-class";

export interface Dnd5ApiClient {
  
  characterClass(): CharacterClass;

}