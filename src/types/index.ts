export type Theme = 'light' | 'dark';

export type Filter =
  | ''
  | 'All'
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

export type Country = {
  capitals: { name: string }[];
  flag: {
    url_png: string;
    description: string;
  };
  names: {
    common: string;
  };
  population: number;
  region: string;
};

export type CountryDetail = {
  borders: string[];
  capitals: { name: string }[];
  region: string;
  subregion: string;
  tlds: string[];
  population: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flag: {
    alt: string;
    url_png: string;
  };
  languages: {
    name: string;
  }[];
  names: {
    common: string;
    native: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
};

export type FetchResultIndex = {
  data: {
    objects: Country[];
    meta: Record<string, number | string>;
  };
};

export type FetchResultDetail = {
  data: {
    objects: [CountryDetail];
    meta: Record<string, number | string>;
  };
};
