import '@testing-library/jest-dom/extend-expect';
import { h, VNode } from 'preact';
import { render } from '@testing-library/preact';
import { Dropdown, DropdownOption } from './dropdown.component';
import { Text } from '../../../modules/localisation/components/text';

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

describe('Dropdown', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
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

        expect(asFragment()).toMatchSnapshot();
    });
});
