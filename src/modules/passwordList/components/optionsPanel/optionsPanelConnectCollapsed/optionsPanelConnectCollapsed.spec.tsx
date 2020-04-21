import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelConnectCollapsed } from './optionsPanelConnectCollapsed.component';

describe('OptionsPanelConnectCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelConnectCollapsed
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
