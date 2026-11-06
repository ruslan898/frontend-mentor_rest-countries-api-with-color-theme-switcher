import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import type { Theme, Country } from '../types';

export function getCountryInfo(
  result: 'name' | 'code',
  from: string | undefined,
): string | undefined {
  countries.registerLocale(en);

  if (!from) return;

  if (result === 'name') {
    if (from === 'UNK') return 'Kosovo';

    return countries.getName(from, 'en');
  }

  if (result === 'code') {
    return countries.getAlpha3Code(from, 'en');
  }

  throw new Error('Invalid arguments');
}

export function getCurrentTheme(): Theme {
  const themeFromLocalStorage = localStorage.getItem('theme');
  if (
    themeFromLocalStorage &&
    (themeFromLocalStorage === 'light' || themeFromLocalStorage === 'dark')
  ) {
    return themeFromLocalStorage;
  } else {
    return 'light';
  }
}

export function changeColor(className: Theme): void {
  const root = document.documentElement;
  root.classList.remove(...root.classList);
  root.classList.add(className);
}

export function search(searchedValue: string, data: Country[]): Country[] {
  const searchedValueLow = searchedValue.toLowerCase();

  return data.filter((item) => {
    const nameLow = item.names.common.toLowerCase();
    return nameLow.includes(searchedValueLow);
  });
}

export async function fetchAllCountries(urlArr: string[]) {
  const responses = await Promise.all(
    urlArr.map((url) => {
      return fetch(url);
    }),
  );

  for (const res of responses) {
    if (!res.ok) {
      throw new Error(`HTTP error: status ${res.status}`);
    }
  }

  const data = await Promise.all(responses.map((res) => res.json()));

  return data;
}

export async function fetchCountry(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error: status ${res.status}`);
  }

  const data = await res.json();

  return data;
}
