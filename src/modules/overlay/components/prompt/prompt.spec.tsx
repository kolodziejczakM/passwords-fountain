import '@testing-library/jest-dom/extend-expect';
import { Fragment, h, VNode } from 'preact';
import { render } from '@testing-library/preact';
import { Prompt } from './prompt.component';
import { Button } from '../../../../common/components/button';

describe('Prompt', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <Prompt
                renderContent={(): string =>
                    'Are you sure you want to delete this file?'
                }
                renderControls={(): VNode => (
                    <Fragment>
                        <Button
                            onClick={(): void => {
                                // empty
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={(): void => {
                                // empty
                            }}
                        >
                            Ok
                        </Button>
                    </Fragment>
                )}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
