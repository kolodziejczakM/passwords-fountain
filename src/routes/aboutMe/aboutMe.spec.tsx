import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { AboutMe } from './aboutMe';

describe('AboutMe', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<AboutMe />);

        expect(asFragment()).toMatchSnapshot();
    });
});
