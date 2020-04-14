import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Prompt } from './prompt.component';

describe('Prompt', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Prompt />);

        expect(asFragment()).toMatchSnapshot();
    });
});
