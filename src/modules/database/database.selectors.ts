import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { DatabaseState } from './database.model';

const selectDatabase = (state: AppState): DatabaseState => state.database;
