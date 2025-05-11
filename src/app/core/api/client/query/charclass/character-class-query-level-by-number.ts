import { ReadClient } from "@app/core/api/client/read-client";
import { Feature } from "@app/core/api/models/charclass/feature";
import { Level } from "@app/core/api/models/charclass/level";
import { Spell } from "@app/core/api/models/charclass/spell";
import { Observable } from "rxjs";

export class CharacterClassQueryLevelByNumber {

  private readonly featuresClient;

  private readonly spellsClient;

  constructor(
    private client: ReadClient
  ) {
    this.featuresClient = this.client.appendRoute('/features');
    this.spellsClient = this.client.appendRoute('/spells');
  }

  public getOne = (): Observable<Level> => this.client.read();

  public getFeatures = (): Observable<Feature> => this.featuresClient.read();

  public getSpells = (): Observable<Spell> => this.spellsClient.read();

}