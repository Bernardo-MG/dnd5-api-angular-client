import { Reference } from "../info/reference";

export class Proficiency {
  index = '';
  name = '';
  url = '';
  type = '';
  classes: Reference[] = [];
  races: Reference[] = [];
  reference = new Reference();
}