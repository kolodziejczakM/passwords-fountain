import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { PasswordListState } from './passwordList.model';

const selectPasswordList = (state: AppState): PasswordListState =>
    state.passwordList;

const mock = [
    {
        refId: 'x1',
        createdAt: '20-11-2018',
        label: 'Bank account',
        login: 'amy126_1998',
        password: 'amy1^3^5',
    },
    {
        refId: 'x2',
        createdAt: '02-01-2019',
        label: 'EA games',
        login: 'Wh4tsApp!',
        password: 'amy1^3^5',
    },
    {
        refId: 'x3',
        createdAt: '24-01-2019',
        label: 'Origin',
        login: 'AmyIsGreat415',
        password: '415A^-+$=&#_)(*',
    },
    {
        refId: 'x4',
        createdAt: '28-02-2019',
        label: 'GMail',
        login: 'amy4124@gmail.com',
        password: 'AMYamy1^3^5',
    },
];

export const selectPasswords = createSelector(
    selectPasswordList,
    (passwordListState: PasswordListState) => mock // passwordListState.passwords
);

export const selectCurrentOptionPanelVariantName = createSelector(
    selectPasswordList,
    (passwordListState: PasswordListState) =>
        passwordListState.currentOptionPanelVariantName
);
