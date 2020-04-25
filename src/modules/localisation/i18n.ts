import { setupI18n } from '@lingui/core';
import { defaultLanguageLocalStorageKeyName } from './localisation.constants';
import en from './en';
import pl from './pl';

export enum languages {
    en = 'en',
    pl = 'pl',
}

const missing = (language: string, id: string): string => {
    console.warn(`Translation in ${language} for ${id} is missing!`);
    return id;
};

export default setupI18n({
    language:
        localStorage.getItem(defaultLanguageLocalStorageKeyName) ??
        languages.en,
    missing,
    catalogs: { en, pl },
});
