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

export function getCurrentTheme() {
  const themeFromLocalStorage = localStorage.getItem('theme');
  return themeFromLocalStorage || 'light';
}

export function changeColor(className) {
  const root = document.documentElement;
  root.classList.remove(...root.classList);
  root.classList.add(className);
}

export function search(searchedValue, data) {
  const searchedValueLow = searchedValue.toLowerCase();

  if (searchedValue.length > 1) {
    return data.filter((item) => {
      const nameLow = item.name.common.toLowerCase();
      return nameLow.includes(searchedValueLow);
    });
  } else {
    return data;
  }
}
