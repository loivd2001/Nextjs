import { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/atoms/navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
