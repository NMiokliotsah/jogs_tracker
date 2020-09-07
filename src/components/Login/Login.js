import React from 'react';
import bear from '../../img/bear-face.png';
import bear_mobile from '../../img/bearFace.png';
import style from './Login.module.css';
import Header from '../Header/Header';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
    return (
        props.redirect ? <Redirect to="/jogs" />
            : <div className={style.test}>
                <Header showNavbar={false} />
                <div className={style.login}>
                    <div className={style.container}>
                        <img alt="" className={style.bearFace} src={bear} />
                        <img alt="" className={style.bearFaceMobile} src={bear_mobile} />
                        <button onClick={props.onClick} className={style.btnLogin}>Let me in</button>
                    </div>
                </div>
            </div>
    );
}