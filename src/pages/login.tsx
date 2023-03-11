import React, { useState, ChangeEvent } from 'react';
import LoginComponent from '../components/atoms/login/LoginComponent';
import { useDispatch } from 'react-redux';
import { handleLoginReducer } from '../store/slices/LoginSlice';

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [UserName, setUserName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [PassWord, setPassWord] = useState('');

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handlePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispath = useDispatch();
  const handleLogin = () => {
    dispath(
      handleLoginReducer({
        UserName: UserName,
        PassWord: PassWord,
      }),
    );
  };
  return (
    <div>
      <LoginComponent
        handleLogin={handleLogin}
        handleUser={handleUserName}
        hanldePass={handlePassWord}
      />
    </div>
  );
};

export default login;
