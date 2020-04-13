import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Dropdown } from './dropdown.component';

describe('Dropdown', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Dropdown />);

        expect(asFragment()).toMatchSnapshot();
    });
});
