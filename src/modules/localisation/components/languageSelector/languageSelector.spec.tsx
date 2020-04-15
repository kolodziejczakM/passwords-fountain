import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { LanguageSelector } from './languageSelector.component';

describe('LanguageSelector', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<LanguageSelector />);

        expect(asFragment()).toMatchSnapshot();
    });
});
