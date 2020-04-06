import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { IconAuthors } from './iconAuthors.component';

describe('IconAuthors', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<IconAuthors />);

        expect(asFragment()).toMatchSnapshot();
    });
});
