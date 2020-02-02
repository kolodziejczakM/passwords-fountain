import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { overlay } from './modules/overlay/overlay.model';

const initialState = {
    overlay,
};

export type InitialState = typeof initialState;

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(initialState)
        : devtools(createStore(initialState));
