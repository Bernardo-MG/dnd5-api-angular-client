import { Reference } from "../info/reference";
import { FeaturePrerequisiteFeature } from "./feature-prerequisite-feature";
import { FeaturePrerequisiteLevel } from "./feature-prerequisite-level";
import { FeaturePrerequisiteSpell } from "./feature-prerequisite-spell";

export class Feature {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    level: number = 0;
    class: Reference = new Reference();
    subclass: Reference = new Reference();
    parent: Reference = new Reference();
    prerequisites: (FeaturePrerequisiteFeature | FeaturePrerequisiteLevel | FeaturePrerequisiteSpell)[] = [];
    feature_specific: any;
}