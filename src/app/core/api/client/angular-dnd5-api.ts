import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Charclass } from "../models/charclass/charclass";
import { Feature } from "../models/charclass/feature";
import { Level } from "../models/charclass/level";
import { Multiclassing } from "../models/charclass/multiclassing";
import { Proficiency } from "../models/charclass/proficiency";
import { Spell } from "../models/charclass/spell";
import { Spellcasting } from "../models/charclass/spellcasting";
import { Reference } from "../models/info/reference";
import { ReferenceList } from "../models/reference-list";
import { AngularReadClient } from "./angular-read-client";
import { ReadClient } from "./read-client";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5Api {

  private readonly client;

  private readonly characterClassQuery;

  private readonly proficiencyQuery;

  constructor(
    http: HttpClient
  ) {
    this.client = new AngularReadClient(http, environment.apiUrl);

    this.characterClassQuery = createCharacterClassQuery(this.client);
    this.proficiencyQuery = createProficiencyQuery(this.client);
  }

  public characterClass = () => this.characterClassQuery;

  public proficiency = () => this.proficiencyQuery;

}

function createCharacterClassQuery(base: ReadClient) {
  const client = base.appendRoute('/classes');

  return {
    getAll: (): Observable<ReferenceList> => client.read(),
    index: (index: string) => createCharacterClassByIndexQuery(client.appendRoute(`/${index}`))
  };

}

function createCharacterClassByIndexQuery(client: ReadClient) {
  const featuresClient = client.appendRoute('/features');
  const multiClassingClient = client.appendRoute('/multi-classing');
  const proficienciesClient = client.appendRoute('/proficiencies');
  const spellcastingClient = client.appendRoute('/spellcasting');
  const spellsClient = client.appendRoute('/spells');
  const subclassesClient = client.appendRoute('/subclasses');

  const levelsQuery = createCharacterClassLevelQuery(client);

  return {
    getOne: (): Observable<Charclass> => client.read(),
    getSpellCasting: (): Observable<Spellcasting> => spellcastingClient.read(),
    getMultiClassing: (): Observable<Multiclassing> => multiClassingClient.read(),
    getSubclasses: (): Observable<Reference> => subclassesClient.read(),
    getSpells: (): Observable<Reference> => spellsClient.read(),
    getFeatures: (): Observable<Reference[]> => featuresClient.read(),
    getProficiencies: (): Observable<Reference[]> => proficienciesClient.read(),
    levels: () => levelsQuery
  };

}

function createCharacterClassLevelQuery(base: ReadClient) {
  const client = base.appendRoute('/levels');

  return {
    getAll: (): Observable<Level[]> => client.read(),
    level: (level: number) => createCharacterClassLevelByNumberQuery(client.appendRoute(`/${level}`))
  };

}

function createCharacterClassLevelByNumberQuery(base: ReadClient) {
    const featuresClient = base.appendRoute('/features');
    const spellsClient = base.appendRoute('/spells');

  return {
    getOne: (): Observable<Level> => base.read(),
    getFeatures: (): Observable<Feature> => featuresClient.read(),
    getSpells: (): Observable<Spell> => spellsClient.read(),
  };

}

function createProficiencyQuery(base: ReadClient) {
  const client = base.appendRoute('/proficiencies');

  return {
    getAll: (): Observable<ReferenceList> => client.read(),
    index: (index: string) => createProficiencyByIndexQuery(client.appendRoute(`/${index}`))
  };

}

function createProficiencyByIndexQuery(base: ReadClient) {
  return {
    getOne: (): Observable<Proficiency> => base.read()
  };

}
