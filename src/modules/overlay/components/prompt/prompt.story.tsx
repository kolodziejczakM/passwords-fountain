import { h, VNode, Fragment } from 'preact';
import { Prompt } from './prompt.component';
import { withA11y } from '@storybook/addon-a11y';
import { Button } from '@/common/components/button';

export default {
    title: 'Prompt',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <Prompt
        renderMessage={(): string =>
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
