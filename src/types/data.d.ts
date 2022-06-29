export interface Continent {
  code: string;
  name: string;
  countries: CountryType[];
}

export interface ContinentData {
  continent: Continent;
}

export interface CountryType {
  name: string;
  phone: string;
  emoji: string;
  capital: string;
  code: string;
  continent: Continent;
}

export interface CountriesData {
  countries: CountryType[];
}

export interface CountryData {
  country: CountryType;
}
