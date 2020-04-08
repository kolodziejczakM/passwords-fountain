import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Text } from './text.component';

describe('Text', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Text>Hello</Text>);

        expect(asFragment()).toMatchSnapshot();
    });
});
