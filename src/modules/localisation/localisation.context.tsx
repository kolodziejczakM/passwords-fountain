import { h, Fragment, VNode } from 'preact';
import { createContext } from 'preact';
import { useContext, useState, useMemo } from 'preact/hooks';
import i18n from './i18n';
import DOMPurify from 'dompurify';

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

// TODO: move it to localisation/components/Text
export const Text = ({
    children,
    withMarkup = false,
}: {
    children: string;
    withMarkup?: boolean;
}): VNode<string> => {
    useContext(LocalisationContext);

    return withMarkup ? (
        <span
            className="sanitized-translation"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(i18n._(children)),
            }}
        />
    ) : (
        <Fragment>{i18n._(children)}</Fragment>
    );
};
