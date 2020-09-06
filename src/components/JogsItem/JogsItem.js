import React from 'react';
import style from './JogsItem.module.css';
import img_jogs from '../../img/icon.png';

export default function JogsItem(props) {
    const onClick = (jog) => {
    }
    return (
        props.filterDate()
            .map(jog => {
                return <div key={jog.id} className={style.jogs} onClick={onClick.bind(this, jog)}>
                    <div className={style.imgJogs}>
                        <img alt="" src={img_jogs}></img>
                    </div>
                    <div className={style.descriptionJogs}>
                        <p>{props.refactoringDate(jog.date)}</p>
                        <p>Speed: <span className={style.jogsSpan}>{props.calculateSpeed(jog.distance, jog.time)}</span></p>
                        <p>Distance: <span className={style.jogsSpan}>{props.refactoringDistance(jog.distance)} км</span></p>
                        <p>Time: <span className={style.jogsSpan}>{jog.time} min</span></p>
                    </div>
                </div>
            }));
}