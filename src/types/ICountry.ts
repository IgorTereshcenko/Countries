import { ICountries } from "./ICountries";

export interface ICountry extends ICountries {
    flag: string;
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: [{name:string}];
    languages: [{name:string}];
    borders: string[];
}