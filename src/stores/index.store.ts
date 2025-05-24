import { createStore } from 'zustand/vanilla';

import { defaultState } from './index.state';
import { AppSlice, AppState, createAppSlice } from './slices/app.slice';

export type Store = AppSlice;

export const initStore = (): AppState => {
  return defaultState;
};

export const createAppStore = (initState: AppState = defaultState) => {
  return createStore<Store>()((set, get, store) => ({
    ...initState,
    ...createAppSlice(set, get, store),
  }));
};
