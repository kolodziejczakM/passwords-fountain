import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelConnectExpanded } from './optionsPanelConnectExpanded.component';

describe('OptionsPanelConnectExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelConnectExpanded
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
