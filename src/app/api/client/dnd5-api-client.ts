import { CharacterClassClient } from "./character-class-client";

export interface Dnd5ApiClient {
  
  characterClass(): CharacterClassClient;

}