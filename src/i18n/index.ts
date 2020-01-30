import { setupI18n } from '@lingui/core';
import en from './en';
import pl from './pl';

const missing = (language: string, id: string): string => {
    console.warn(`Translation in ${language} for ${id} is missing!`);
    return id;
};

export default setupI18n({ language: 'en', missing, catalogs: { en, pl } });
