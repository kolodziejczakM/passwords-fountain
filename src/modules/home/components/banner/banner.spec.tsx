import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Banner } from './banner.component';

describe('Banner', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Banner />);

        expect(asFragment()).toMatchSnapshot();
    });
});
