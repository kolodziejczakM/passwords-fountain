import { h, VNode } from 'preact';
import { PasswordEntity } from './passwordEntity.component';
import { withA11y } from '@storybook/addon-a11y';
import { withStoreMock } from '../../../../../.storybook/helpers';

export default {
    title: 'PasswordEntity',
    decorators: [withA11y],
};

const state = {
    passwordList: {
        selectedAndDecryptedEntity: {},
    },
};

const data = {
    ref: { id: 'x1', value: { id: 'x1 ' } },
    ts: Date.now(),
    data: { label: 'My EA Account', value: 'v1' },
};

export const defaultView = (): VNode =>
    withStoreMock(
        () => (
            <PasswordEntity
                data={data}
                isSelected={false}
                onClick={() => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        ),
        state
    );

export const Selected = (): VNode =>
    withStoreMock(
        () => (
            <PasswordEntity
                data={data}
                isSelected
                onClick={() => {
                    /* eslint-disable @typescript-eslint/no-empty-function */
                }}
            />
        ),
        state
    );
