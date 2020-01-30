import { Action } from 'unistore';

export interface Localisation {
    currentLanguage: string;
}

interface ActionCreators {
    setCurrentLanguage: Action<Localisation>;
}

export const localisation: Localisation = { currentLanguage: 'en' };

export const localisationActions: ActionCreators = {
    setCurrentLanguage(
        state: Localisation,
        language: string
    ): Partial<Localisation> {
        return { currentLanguage: language };
    },
};
