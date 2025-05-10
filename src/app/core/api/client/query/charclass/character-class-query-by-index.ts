import { ReadClient } from "@app/core/api/client/read-client";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassQueryLevel } from "./character-class-query-level";

export class CharacterClassQueryByIndex {

  private spellcastingRoute = '/spellcasting';

  private multiclassingRoute = '/multi-classing';

  private subclassesRoute = '/subclasses';

  private spellsRoute = '/spells';

  private featuresRoute = '/features';

  private proficienciesRoute = '/proficiencies';

  private readonly spellcastingClient;

  constructor(
    private client: ReadClient
  ) {
    this.spellcastingClient = this.client.appendRoute(this.spellcastingRoute);
  }

  public getOne(): Observable<Charclass> {
    return this.client.read();
  }

  public getSpellCasting(): Observable<Spellcasting> {
    return this.spellcastingClient.read();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    return this.client.appendRoute(this.multiclassingRoute).read();
  }

  public getSubclasses(): Observable<Reference[]> {
    return this.client.appendRoute(this.subclassesRoute).read();
  }

  public getSpells(): Observable<Reference[]> {
    return this.client.appendRoute(this.spellsRoute).read();
  }

  public getFeatures(): Observable<Reference[]> {
    return this.client.appendRoute(this.featuresRoute).read();
  }

  public getProficiencies(): Observable<Reference[]> {
    return this.client.appendRoute(this.proficienciesRoute).read();
  }

  public levels(): CharacterClassQueryLevel {
    return new CharacterClassQueryLevel(this.client);
  }

}