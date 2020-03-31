import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Settings } from './settings';

describe('Settings', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Settings />);

        expect(asFragment()).toMatchSnapshot();
    });
});
