export type Theme = 'light' | 'dark';
export type Filter =
  | ''
  | 'All'
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

// type Currency = {
//   code: string;
//   name: string;
//   symbol: string;
// };

// type Language = {
//   iso639_1: string;
//   iso639_2: string;
//   name: string;
//   nativeName: string;
// };

// type RegionalBloc = {
//   acronym: string;
//   name: string;
//   otherNames?: string[];
// };

// export type Country = {
//   name: string;
//   topLevelDomain: string[];
//   alpha2Code: string;
//   alpha3Code: string;
//   callingCodes: string[];
//   capital: string;
//   altSpellings: string[];
//   subregion: string;
//   region: string;
//   population: number;
//   latlng: number[];
//   demonym: string;
//   area: number;
//   timezones: string[];
//   borders: string[];
//   nativeName: string;
//   numericCode: string;
//   flags: {
//     svg: string;
//     png: string;
//   };
//   currencies: Currency[];
//   languages: Language[];
//   translations: {
//     br: string;
//     pt: string;
//     nl: string;
//     hr: string;
//     fa: string;
//     de: string;
//     es: string;
//     fr: string;
//     ja: string;
//     it: string;
//     hu: string;
//   };
//   flag: string;
//   regionalBlocs?: RegionalBloc[];
//   cioc?: string;
//   independent: boolean;
// };

export type Country = {
  capital: string[];
  cca3: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  region: string;
};

export type CountryDetail = {
  borders: string[];
  capital: string[];
  region: string;
  subregion: string;
  tld: string[];
  population: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
};
