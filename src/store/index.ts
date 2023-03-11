import { configureStore } from '@reduxjs/toolkit';
import loginReducer ,{ LoginType } from './slices/LoginSlice/index';

export interface RootStateType {
  login: LoginType;
}

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
