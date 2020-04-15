import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './languageSelector.styles';
import {
    Dropdown,
    DropdownOption,
} from '@/common/components/dropdown/dropdown.component';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';
import { languages } from '@/modules/localisation/i18n';
import { useLocalisation } from '@/modules/localisation/localisation.context';

export const LanguageSelector: TypedComponent<Props> = () => {
    const [, setLanguage] = useLocalisation();
    const options = [
        { id: 0, label: 'language.english', value: languages.en },
        { id: 1, label: 'language.polish', value: languages.pl },
    ];

    return (
        <Wrapper>
            <Dropdown
                withDefaultOption={options[0]}
                renderOptionList={(
                    OptionComponent: any,
                    onOptionClick: Function
                ): VNode[] => {
                    return options.map((option: DropdownOption) => (
                        <OptionComponent
                            key={option.id}
                            onClick={(): void => {
                                onOptionClick(option);
                                setLanguage(option.value as string);
                            }}
                        >
                            <Text>{option.label}</Text>
                        </OptionComponent>
                    ));
                }}
                renderSelectedOption={(): null => null}
                renderExpandIcon={(): VNode => (
                    <Icon name="globe" width={30} height={30} />
                )}
            />
        </Wrapper>
    );
};

interface Props {}

LanguageSelector.propTypes = {};
