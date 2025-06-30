
import { lt } from './lt';
import { en } from './en';
import { ru } from './ru';
import { de } from './de';
import { Language } from '../contexts/LanguageContext';

export const translations = {
  lt,
  en,
  ru,
  de
};

export const getTranslation = (language: Language) => translations[language];
