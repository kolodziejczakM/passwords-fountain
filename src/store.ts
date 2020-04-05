import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { overlayState } from '@/modules/overlay/overlay.model';
import { passwordListState } from '@/modules/passwordList/passwordList.model';
import { homeState } from '@/modules/home/home.model';
//<-- IMPORT MODULE STATE -->

const appState = {
    overlay: overlayState,
    passwordList: passwordListState,
    home: homeState,
    //<-- INJECT MODULE STATE -->
} as const;

export type AppState = typeof appState;

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(appState)
        : devtools(createStore(appState));
