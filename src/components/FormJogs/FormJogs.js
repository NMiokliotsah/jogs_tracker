import React from 'react';
import style from './FormJogs.module.css';
import { Redirect, Link } from 'react-router-dom';
import img_cancel from '../../img/cancel.png';
import HeaderContainer from '../Header/HeaderContainer';

export default function FormJogs(props) {
    return props.redirect ? <Redirect to="/jogs" /> :
        <>
            <HeaderContainer showNavbar={true} />
            <div className={style.formJogs}>
                <Link to="/jogs">
                    <img
                        alt=""
                        onClick={props.onClickImgCancel}
                        className={style.imgCancel}
                        src={img_cancel} />
                </Link>
                <form>
                    <div>
                        <label>Distance</label>
                        <input
                            name="distance"
                            value={props.distance}
                            onChange={props.handlerInput}
                            placeholder="meters"
                            className={style.inputDistance}
                            required />
                    </div>
                    <div>
                        <label>Time</label>
                        <input
                            name="time"
                            value={props.time}
                            onChange={props.handlerInput}
                            placeholder="minutes"
                            className={style.inputTime}
                            required />
                    </div>
                    <div>
                        <label>Date</label>
                        <input
                            name="date"
                            value={props.date}
                            onChange={props.handlerInput}
                            placeholder="dd.mm.yyyy"
                            className={style.inputDate}
                            required />
                    </div>
                    <button onClick={props.setJog} className={style.btnSave}>Save</button>
                </form>
            </div>
        </>
}