import { Reference } from "./reference";

export class Skill {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    ability_score: Reference = new Reference();
}