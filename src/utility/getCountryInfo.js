import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

export function getCountryInfo(result, from) {
  countries.registerLocale(en);

  if (result === 'name') {
    return countries.getName(from, 'en');
  }

  if (result === 'code') {
    return countries.getAlpha3Code(from, 'en');
  }

  throw new Error('Invalid arguments');
}
