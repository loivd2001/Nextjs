import React from 'react';
import style from '../styles/about.module.scss';

interface AboutPpagerops {
  name : string
}

const AboutPage = (props: AboutPpagerops) => {
  return (
    <div className={style.myclass}>
      {props.name}
      About Page
    </div>
  );
};
export default AboutPage;

