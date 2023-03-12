import { Prerequisite } from "./prerequisite";

export class Feat {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    prerequisites: Prerequisite[] = [];
}