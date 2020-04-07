import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { PhoneChat } from './phoneChat.component';

describe('PhoneChat', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<PhoneChat />);

        expect(asFragment()).toMatchSnapshot();
    });
});
