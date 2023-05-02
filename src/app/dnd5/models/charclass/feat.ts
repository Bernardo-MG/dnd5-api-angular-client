import { Prerequisite } from "./prerequisite";

export class Feat {
    index = '';
    name = '';
    url = '';
    desc: string[] = [];
    prerequisites: Prerequisite[] = [];
}