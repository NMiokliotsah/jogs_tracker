import React from 'react';
import Header from '../Header/Header';
import style from './FormJogs.module.css';
import { Redirect } from 'react-router-dom';
import img_cancel from '../../img/cancel.png';

export default function FormJogs(props) {

    return (
        <>
            {props.redirect && <Redirect to="/jogs" />}
            <Header showNavbar={true} />
            <img alt="" src={img_cancel} />

            <div className={style.formJogs}>
                <img alt="" onClick={props.onClickImg} className={style.imgCancel} src={img_cancel} />

                <form>
                    <div>
                        <label for="distance">Distance</label>
                        <input
                            id="distance"
                            name="distance"
                            onChange={props.handlerInput}
                            placeholder="meters"
                            className={style.inputDistance}
                            required />
                    </div>
                    <div>
                        <label for="time">Time</label>
                        <input
                            id="time"
                            name="time"
                            onChange={props.handlerInput}
                            placeholder="minutes"
                            className={style.inputTime}
                            required />
                    </div>
                    <div>
                        <label for="date">Date</label>
                        <input
                            id="date"
                            name="date"
                            onChange={props.handlerInput}
                            placeholder="dd.mm.yyyy"
                            className={style.inputDate}
                            required />
                    </div>
                    <button onClick={props.setJog} className={style.btnSave}>Save</button>
                </form>
            </div>
        </>
    );
}