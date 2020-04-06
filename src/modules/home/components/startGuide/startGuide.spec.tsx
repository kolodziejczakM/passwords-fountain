import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { StartGuide } from './startGuide.component';

describe('StartGuide', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<StartGuide />);

        expect(asFragment()).toMatchSnapshot();
    });
});
