
import defaultLocale from '../settings';

export const __ = (translation) => {
    let translationsFile = findTranslationsFile(defaultLocale);
    if (translationsFile){
        return translationsFile[translation] || translation;
    } else {
        return translation
    }
}

const findTranslationsFile = (locale) => {
  try {
    return require(`./locales/${locale}.json`);
  } catch (err) {
    return null;
  }
};