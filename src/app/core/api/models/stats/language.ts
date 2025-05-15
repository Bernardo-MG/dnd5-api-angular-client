import { LanguageType } from "./language-type";

export class Language {
  index = '';
  name = '';
  url = '';
  desc = '';
  type = LanguageType.Standard;
  script = '';
  typical_speakers: string[] = [];
}