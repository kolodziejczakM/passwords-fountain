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
            refId: 'xd12',
            createdAt: '10.02.2010',
            label: 'Company bank',
            login: 'theGreatest1292',
            password: 'xa12j!@sfpsqw',
        }}
    />
);
