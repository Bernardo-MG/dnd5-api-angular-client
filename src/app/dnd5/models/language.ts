import { LanguageType } from "./language-type";

export class Language {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string = '';
    type: LanguageType = LanguageType.Standard;
    script: string = '';
    typical_speakers: string[] = [];
}