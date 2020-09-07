import React from 'react';
import style from './JogsItem.module.css';
import img_jogs from '../../img/icon.png';
import { Redirect } from 'react-router-dom';
import { refactoringDate, calculateSpeed, refactoringDistance } from '../../utils/refactoringJogsData';

export default function JogsItem(props) {
    const onClick = jog => {
        props.setSelectedJog(jog);
        props.setRedirect(true);
    }
    return props.redirect ? <Redirect to="newJog" /> :
        props.filterDate()
            .map(jog => {
                return <div key={jog.id} className={style.jogs} onClick={onClick.bind(this, jog)}>
                    <div className={style.imgJogs}>
                        <img alt="" src={img_jogs}></img>
                    </div>
                    <div className={style.descriptionJogs}>
                        <p>{refactoringDate(jog.date)}</p>
                        <p>Speed: <span className={style.jogsSpan}>{calculateSpeed(jog.distance, jog.time)}</span></p>
                        <p>Distance: <span className={style.jogsSpan}>{refactoringDistance(jog.distance)} км</span></p>
                        <p>Time: <span className={style.jogsSpan}>{jog.time} min</span></p>
                    </div>
                </div>
            });
}