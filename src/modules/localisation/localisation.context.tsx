import { h, VNode } from 'preact';
import { createContext } from 'preact';
import { useState, useMemo } from 'preact/hooks';
import i18n from './i18n';

type ContextValue = [string, (v: string) => void];

export const LocalisationContext = createContext<ContextValue>([
    i18n.language,
    (): void => {
        // placeholder setter fn
    },
]);

export const LocalisationProvider = ({
    children,
}: {
    children: VNode;
}): VNode => {
    const [currentLanguage, setLanguage] = useState(i18n.language);

    const setCurrentLanguage = (lang: string): void => {
        i18n.activate(lang);
        setLanguage(lang);
    };

    const value: ContextValue = useMemo(
        () => [currentLanguage, setCurrentLanguage],
        [currentLanguage]
    );

    return (
        <LocalisationContext.Provider value={value}>
            {children}
        </LocalisationContext.Provider>
    );
};
