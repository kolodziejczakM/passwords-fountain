import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelDecodeExpanded } from './optionsPanelDecodeExpanded.component';
import { OptionsPanelDecodeCollapsed } from '../optionsPanelDecodeCollapsed';

describe('OptionsPanelDecodeExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelDecodeExpanded
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
