import { h, VNode } from 'preact';
import { Dropdown, DropdownOption } from './dropdown.component';
import { withA11y } from '@storybook/addon-a11y';
import { Text } from '@/modules/localisation/components/text';

export default {
    title: 'Dropdown',
    decorators: [withA11y],
};

const data: DropdownOption[] = [
    {
        id: 0,
        label: 'Mateusz',
        value: { firstName: 'Mateusz', lastName: 'Kosowski' },
    },
    {
        id: 1,
        label: 'Janusz',
        value: { firstName: 'Janusz', lastName: 'Pindera' },
    },
    {
        id: 2,
        label: 'Stanisław',
        value: { firstName: 'Stanisław', lastName: 'Mendoza' },
    },
];

export const defaultView = (): VNode => (
    <Dropdown
        renderSelectedOption={(selectedOption): VNode => {
            return <Text>{selectedOption.label}</Text>;
        }}
        renderOptionList={(OptionComponent, onOptionClick): VNode[] => {
            return data.map(user => (
                <OptionComponent
                    key={user.id}
                    onClick={(): void => onOptionClick(user)}
                >
                    {user.label}
                </OptionComponent>
            ));
        }}
    />
);
