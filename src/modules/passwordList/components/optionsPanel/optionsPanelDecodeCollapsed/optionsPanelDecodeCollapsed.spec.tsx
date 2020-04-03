import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelDecodeCollapsed } from './optionsPanelDecodeCollapsed.component';

describe('OptionsPanelDecodeCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelDecodeCollapsed
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
