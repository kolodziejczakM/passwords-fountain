import { h, VNode } from 'preact';
import { FormControl } from './formControl.component';
import { withA11y } from '@storybook/addon-a11y';
import { TextInput } from '@/common/components/textInput';

export default {
    title: 'FormControl',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <FormControl
        renderInput={() => (
            <TextInput
                onInput={() => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        )}
        renderLabel={() => 'Type your name:'}
        renderError={() => ''}
        hasError={false}
    />
);

export const hasError = (): VNode => (
    <FormControl
        renderInput={() => (
            <TextInput
                hasError
                onInput={() => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        )}
        renderLabel={() => 'Type your name:'}
        renderError={() => 'This field is required.'}
        hasError
    />
);
