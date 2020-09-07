import React, { useState } from 'react';
import FormJogs from './FormJogs';
import { api } from '../../api/api';
import { connect } from 'react-redux';
import { refactoringDate, refactoringDistance } from '../../utils/refactoringJogsData';
import { setSelectedJog } from '../../redux/jogs-reducers';

function FormJogsContainer(props) {
    const selectedJog = props.selectedJog;
    const [distance, setDistance] = useState((selectedJog && refactoringDistance(selectedJog.distance)) || "");
    const [time, setTime] = useState((selectedJog && selectedJog.time) || "");
    const [date, setDate] = useState((selectedJog && refactoringDate(selectedJog.date)) || "");
    const [redirect, setRedirect] = useState(false);

    const setJog = async e => {
        e.preventDefault();
        if (props.selectedJog) {
            await api.changeJog({
                date,
                time: +time,
                distance: +distance * 100,
                jog_id: props.selectedJog.id,
                user_id: props.selectedJog.user_id
            }).then(res => {
                if (!res.error_message) {
                    props.setSelectedJog(null);
                    setRedirect(true);
                }
            });
        } else {
            await api.setJog({
                date,
                time,
                distance
            }).then(res => {
                if (!res.error_message) {
                    props.setSelectedJog(null);
                    setRedirect(true);
                }
            });
        }
    }
    const onClickImgCancel = () => {
        props.setSelectedJog(null);
    }
    const handlerInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "distance":
                setDistance(value);
                break;
            case "time":
                setTime(value);
                break;
            case "date":
                setDate(value);
                break;
        }
    }

    return <FormJogs
        setJog={setJog}
        handlerInput={handlerInput}
        redirect={redirect}
        onClickImgCancel={onClickImgCancel}
        selectedJog={props.selectedJog}
        distance={distance}
        time={time}
        date={date} />
}

const mapToStateProps = state => ({
    redirect: state.jogs.redirect,
    selectedJog: state.jogs.selectedJog
});


export default connect(mapToStateProps, { setSelectedJog })(FormJogsContainer);
