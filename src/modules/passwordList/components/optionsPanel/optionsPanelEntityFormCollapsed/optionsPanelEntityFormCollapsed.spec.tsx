import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelEntityFormCollapsed } from './optionsPanelEntityFormCollapsed.component';

describe('OptionsPanelEntityFormCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelEntityFormCollapsed
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
