import { Reference } from "./reference";

export class Rule {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string = '';
    subsections: Reference[] = [];
}