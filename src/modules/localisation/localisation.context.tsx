import { h, Fragment, VNode } from 'preact';
import { createContext } from 'preact';
import { useContext, useState, useMemo } from 'preact/hooks';
import i18n from '../../i18n';

const LocalisationContext = createContext(i18n.language);

// TODO: make these types better
export const LocalisationProvider = (props: any): any => {
    const [currentLanguage, setLanguage] = useState(i18n.language);

    const setCurrentLanguage = (lang: string): void => {
        i18n.activate(lang);
        setLanguage(lang);
    };

    const value = useMemo(() => [currentLanguage, setCurrentLanguage], [
        currentLanguage,
    ]);

    return <LocalisationContext.Provider value={value} {...props} />;
};

// TODO: make these types better
export const useLocalisation = (): any => {
    const context = useContext(LocalisationContext);

    if (!context) {
        throw new Error(
            `useLocalisation must be used within a LocalisationProvider`
        );
    }

    return context;
};

// TODO: looks like there is an error in Preact VNode type,
// It should be allowed to just return strings as jsx elements (without wrapping them in Fragment and making them VNodes)
export const Text = ({ children }: { children: string }): VNode<string> => {
    useContext(LocalisationContext);
    console.log('Re-rendering <Text /> Component');

    // return i18n._(children);
    return <Fragment>{i18n._(children)}</Fragment>;
};
