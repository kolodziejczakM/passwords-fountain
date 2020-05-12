import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelConnectCollapsed } from './optionsPanelConnectCollapsed.component';

describe('OptionsPanelConnectCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelConnectCollapsed
                switchCurrentVariantName={(): void => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
