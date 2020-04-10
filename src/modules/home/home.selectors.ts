import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { HomeState } from './home.model';

const selectHome = (state: AppState): HomeState => state.home;
