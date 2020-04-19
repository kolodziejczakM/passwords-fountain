import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelEntityFormExpanded } from './optionsPanelEntityFormExpanded.component';

describe('OptionsPanelAddNewExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelEntityFormExpanded
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
