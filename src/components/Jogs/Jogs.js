import React from 'react';
import style from './Jogs.module.css';
import JogsItemContainer from '../JogsItem/JogsItemContainer';
import img_add from '../../img/add.png';
import img_sad from '../../img/sad-rounded-square-emoticon.png';
import { Redirect } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderComponent';

export default function Jogs(props) {
    return (
        <>
            {props.redirect && <Redirect to="/newJog" />}
            <HeaderContainer showNavbar={true} showFilter={true} />
            <div className={style.filter}>
                <div>
                    <label for="dateFrom" className={style.dateLabel}>Date from</label>
                    <input
                        id="dateFrom"
                        name="dateFrom"
                        onChange={props.handlerInput}
                        type="date"
                        className={style.timePicker} />
                </div>
                <div className={style.dateTo}>
                    <label for="dateTo" className={style.dateLabel}>Date to</label>
                    <input
                        id="dateTo"
                        name="dateTo"
                        onChange={props.handlerInput}
                        type="date"
                        className={style.timePicker} />
                </div>
            </div>
            {props.jogs.length > 0 ?
                <div>
                    <div className={style.jogsItem}>
                        <JogsItemContainer dateFrom={props.dateFrom} dateTo={props.dateTo} jogs={props.jogs} />
                    </div>
                    <img onClick={props.redirectToFormJog} alt="" className={style.imgAdd} src={img_add}></img>
                </div>
                :
                <div className={style.createJog}>
                    <img onClick={props.redirectToFormJog} src={img_sad} alt=""></img>
                    <p>Nothing is there</p>
                    <button>Create your jog first</button>
                </div>
            }
        </>
    );
}