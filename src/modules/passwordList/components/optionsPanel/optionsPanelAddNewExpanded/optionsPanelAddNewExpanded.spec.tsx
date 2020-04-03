import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelAddNewExpanded } from './optionsPanelAddNewExpanded.component';

describe('OptionsPanelAddNewExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <OptionsPanelAddNewExpanded
                switchCurrentVariantName={(): void => {
                    // TODO
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
