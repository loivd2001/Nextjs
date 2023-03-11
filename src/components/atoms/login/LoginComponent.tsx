import * as React from 'react';
import style from '../../../styles/login.module.scss';

interface LoginType {
  handleLogin: () => void;
  handleUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hanldePass: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginComponent({ handleLogin ,handleUser ,hanldePass }: LoginType) {
  return (
    <div className={style.wrapper_login}>
      <h3> Login</h3>
      <div>
        <p className="mb-1">User Name</p>
        <input type="text" onChange={handleUser}/>
      </div>
      <div>
        <p className="mb-1">Password</p>
        <input type="text" onChange={hanldePass}/>
      </div>
      <button type="button" onClick={handleLogin} className="mt-2 bg-danger">
        Đăng nhập
      </button>
    </div>
  );
}
