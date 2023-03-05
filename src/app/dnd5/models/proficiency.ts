import { Reference } from "./reference";

export class Proficiency {
    index: string = '';
    name: string = '';
    url: string = '';
    type: string = '';
    classes: Reference[] = [];
    races: Reference[] = [];
    reference: Reference = new Reference();
}