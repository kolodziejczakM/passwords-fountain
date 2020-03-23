import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { NavBar } from './navBar.component';

describe('NavBar', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<NavBar />);

        expect(asFragment()).toMatchSnapshot();
    });
});
