import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

export  interface LoginType {
  UserName: string;
  PassWord: string;
}

const initState: LoginType = {
  UserName: 'voducloi01',
  PassWord: '12345',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initState,
  reducers: reducers,
});


export  const { handleLoginReducer } = loginSlice.actions;

export default loginSlice.reducer;
