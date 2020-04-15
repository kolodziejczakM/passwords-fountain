import { h, VNode } from 'preact';
import { LanguageSelector } from './languageSelector.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'LanguageSelector',
    decorators: [withA11y],
};

const wrapperStyles = {
    margin: '10px 120px' /* stylelint-disable-line */,
};

export const defaultView = (): VNode => (
    <div style={wrapperStyles}>
        <LanguageSelector />
    </div>
);
