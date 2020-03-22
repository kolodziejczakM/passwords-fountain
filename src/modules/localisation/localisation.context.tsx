import { h, Fragment, VNode } from 'preact';
import { createContext } from 'preact';
import { useContext, useState, useMemo } from 'preact/hooks';
import i18n from './i18n';

type ContextValue = [string, (v: string) => void];

const LocalisationContext = createContext<ContextValue>([
    i18n.language,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (): void => {},
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

export const useLocalisation = (): ContextValue => {
    const context: ContextValue = useContext(LocalisationContext);

    if (!context) {
        throw new Error(
            `useLocalisation must be used within a LocalisationProvider`
        );
    }

    return context;
};

export const Text = ({ children }: { children: string }): VNode<string> => {
    useContext(LocalisationContext);
    return <Fragment>{i18n._(children)}</Fragment>;
};
