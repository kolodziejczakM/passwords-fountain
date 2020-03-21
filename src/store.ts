import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { overlayState } from './modules/overlay/overlay.model';

const appState = {
    test: 'xd',
    overlay: overlayState,
};

export type AppState = typeof appState;

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(appState)
        : devtools(createStore(appState));
