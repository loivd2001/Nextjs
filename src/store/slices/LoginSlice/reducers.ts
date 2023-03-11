import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LoginType } from '.';

const handleLoginReducer: CaseReducer<LoginType, PayloadAction<LoginType>> = (
  state,
  action,
) => {
  if (
    state.UserName === action.payload.UserName &&
    state.PassWord === action.payload.PassWord
  ) {
    console.log('thanh cong');
  } else {
    console.log('that bai');
  }
};

export default  {handleLoginReducer} ;
