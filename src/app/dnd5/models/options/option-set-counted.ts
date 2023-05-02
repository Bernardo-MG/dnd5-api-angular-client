import { Reference } from "../info/reference";

export class OptionSetCounted {
    option_type = 'counted_reference';
    count = 0;
    of = new Reference();
}