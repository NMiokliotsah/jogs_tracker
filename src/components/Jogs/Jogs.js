import React from 'react';
import style from './Jogs.module.css';
import JogsItemContainer from '../JogsItem/JogsItemContainer';
import img_add from '../../img/add.png';
import img_sad from '../../img/sad-rounded-square-emoticon.png';
import { Redirect, Link } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';

export default function Jogs(props) {
    return (
        <>
            {props.redirect && <Redirect to="/newJog" />}
            <HeaderContainer showNavbar={true} showFilter={true} />
            {props.showFilterBar && <div className={style.filter}>
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
            }
            {props.jogs.length > 0 ?
                <div>
                    <div className={style.jogItems}>
                        <JogsItemContainer dateFrom={props.dateFrom} dateTo={props.dateTo} jogs={props.jogs} />
                    </div>
                    <Link to="/newJog"><img alt="" className={style.imgAdd} src={img_add} /></Link>
                </div>
                :
                <div className={style.createJog}>
                    <img src={img_sad} alt=""></img>
                    <p>Nothing is there</p>
                    <Link to="/newJog"><button>Create your jog first</button></Link>
                </div>
            }
        </>
    );
}