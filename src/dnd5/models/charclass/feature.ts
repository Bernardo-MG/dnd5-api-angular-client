import { Reference } from "../info/reference";
import { FeaturePrerequisiteFeature } from "./feature-prerequisite-feature";
import { FeaturePrerequisiteLevel } from "./feature-prerequisite-level";
import { FeaturePrerequisiteSpell } from "./feature-prerequisite-spell";

export class Feature {
    index = '';
    name = '';
    url = '';
    desc: string[] = [];
    level = 0;
    class = new Reference();
    subclass = new Reference();
    parent = new Reference();
    prerequisites: (FeaturePrerequisiteFeature | FeaturePrerequisiteLevel | FeaturePrerequisiteSpell)[] = [];
    feature_specific: any;
}