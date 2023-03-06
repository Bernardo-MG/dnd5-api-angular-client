import { Reference } from "./reference";

export class Dc {
    dc_type: Reference = new Reference();
    dc_value: number = 0;
    success_type: string = '';
}