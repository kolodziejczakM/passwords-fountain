import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { StartAppAnchor } from './startAppAnchor.component';

describe('StartAppAnchor', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<StartAppAnchor />);

        expect(asFragment()).toMatchSnapshot();
    });
});
