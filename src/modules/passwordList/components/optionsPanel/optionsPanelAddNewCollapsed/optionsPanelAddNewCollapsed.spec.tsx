import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelAddNewCollapsed } from './optionsPanelAddNewCollapsed.component';

describe('OptionsPanelAddNewCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelAddNewCollapsed
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
