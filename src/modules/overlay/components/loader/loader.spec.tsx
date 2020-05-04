import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Loader } from './loader.component';

describe('Loader', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Loader />);

        expect(asFragment()).toMatchSnapshot();
    });
});
