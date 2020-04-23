import { h, VNode } from 'preact';
import { PasswordEntity } from './passwordEntity.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'PasswordEntity',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <PasswordEntity
        data={{
            ref: { id: 'x1', value: { id: 'x1 ' } },
            ts: Date.now(),
            data: { label: 'My EA Account', value: 'v1' },
        }}
        isSelected={false}
        onClick={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
        promptVisibility={false}
        setPromptVisibility={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);
