import { ReadClient } from "@app/core/api/client/read-client";
import { Feature } from "@app/dnd5/models/charclass/feature";
import { Level } from "@app/dnd5/models/charclass/level";
import { Spell } from "@app/dnd5/models/charclass/spell";
import { Observable } from "rxjs";

export class CharacterClassQueryLevelByNumber {

  private featureRoute = '/features';

  private spellRoute = '/spells';

  constructor(
    private client: ReadClient
  ) { }

  public getOne(): Observable<Level> {
    return this.client.read();
  }

  public getFeatures(): Observable<Feature> {
    return this.client.appendRoute(this.featureRoute).read();
  }

  public getSpells(): Observable<Spell> {
    return this.client.appendRoute(this.spellRoute).read();
  }

}