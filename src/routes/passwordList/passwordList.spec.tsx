import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { PasswordList } from './passwordList';

describe('PasswordList', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<PasswordList />);

        expect(asFragment()).toMatchSnapshot();
    });
});
