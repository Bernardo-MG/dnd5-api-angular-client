import { ReadClient } from "@app/core/api/client/read-client";
import { Charclass } from "@app/core/api/models/charclass/charclass";
import { Multiclassing } from "@app/core/api/models/charclass/multiclassing";
import { Spellcasting } from "@app/core/api/models/charclass/spellcasting";
import { Reference } from "@app/core/api/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassQueryLevel } from "./character-class-query-level";

export class CharacterClassQueryByIndex {

  private readonly featuresClient;

  private readonly multiClassingClient;

  private readonly proficienciesClient;

  private readonly spellcastingClient;

  private readonly spellsClient;

  private readonly subclassesClient;

  private readonly levelsQuery;

  constructor(
    private client: ReadClient
  ) {
    this.featuresClient = this.client.appendRoute('/features');
    this.multiClassingClient = this.client.appendRoute('/multi-classing');
    this.proficienciesClient = this.client.appendRoute('/proficiencies');
    this.spellcastingClient = this.client.appendRoute('/spellcasting');
    this.spellsClient = this.client.appendRoute('/spells');
    this.subclassesClient = this.client.appendRoute('/subclasses');

    this.levelsQuery = new CharacterClassQueryLevel(this.client);
  }

  public getOne(): Observable<Charclass> {
    return this.client.read();
  }

  public getSpellCasting(): Observable<Spellcasting> {
    return this.spellcastingClient.read();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    return this.multiClassingClient.read();
  }

  public getSubclasses(): Observable<Reference[]> {
    return this.subclassesClient.read();
  }

  public getSpells(): Observable<Reference[]> {
    return this.spellsClient.read();
  }

  public getFeatures(): Observable<Reference[]> {
    return this.featuresClient.read();
  }

  public getProficiencies(): Observable<Reference[]> {
    return this.proficienciesClient.read();
  }

  public levels(): CharacterClassQueryLevel {
    return this.levelsQuery;
  }

}