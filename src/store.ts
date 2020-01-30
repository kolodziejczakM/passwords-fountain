import createStore from 'unistore';
import devtools from 'unistore/devtools';

import {
    localisation,
    Localisation,
} from './modules/localisation/localisation.model';

export interface StoreState {
    localisation: Localisation;
}

const initialState: StoreState = { localisation };

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(initialState)
        : devtools(createStore(initialState));
