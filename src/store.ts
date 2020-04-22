import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { overlayState } from '@/modules/overlay/overlay.state';
import { passwordListState } from '@/modules/passwordList/passwordList.state';
import { databaseState } from '@/modules/database/database.state';
//<-- IMPORT MODULE STATE -->

const appState = {
    overlay: overlayState,
    passwordList: passwordListState,
    database: databaseState,
    //<-- INJECT MODULE STATE -->
} as const;

export type AppState = typeof appState;

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(appState)
        : devtools(createStore(appState));

export { useSelector, useAction } from '@preact-hooks/unistore';
