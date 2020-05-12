import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { IconButton } from './iconButton.component';

describe('IconButton', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <IconButton
                iconName="bin"
                onClick={() => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
