import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { PasswordListState } from './passwordList.model';

const selectPasswordList = (state: AppState): PasswordListState =>
    state.passwordList;

export { useSelector } from '@preact-hooks/unistore';
