import { Reference } from "./reference";

export class Prerequisite {
    ability_score: Reference = new Reference();
    minimum_score: number = 0;
}