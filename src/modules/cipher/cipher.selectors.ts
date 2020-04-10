import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { CipherState } from './cipher.model';

const selectCipher = (state: AppState): CipherState => state.cipher;
