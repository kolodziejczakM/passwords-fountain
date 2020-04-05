import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Segment } from './segment.component';

describe('Segment', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Segment />);

        expect(asFragment()).toMatchSnapshot();
    });
});
