import { Reference } from "./reference";

export class Subclass {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    class: Reference = new Reference();
    subclass_flavor: string = '';
    subclass_levels: string = '';
    spells: any[] = [];
}