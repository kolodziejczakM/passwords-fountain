import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanel } from './optionsPanel.component';

describe('OptionsPanel', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<OptionsPanel />);

        expect(asFragment()).toMatchSnapshot();
    });
});
