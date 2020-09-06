import React, { useState } from 'react';
import FormJogs from './FormJogs';
import { api } from '../../api/api';

export default function FormJogsContainer() {
    const [distance, setDistance] = useState(null);
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const setJog = e => {
        e.preventDefault();
        api.setJog({
            date,
            time,
            distance
        }).then(res => {
            if (!res.error_message) setRedirect(true);
        });
    }
    const onClickImg = () => {
         setRedirect(true);
    }
    const handlerInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "distance":
                setDistance(+value);
                break;
            case "time":
                setTime(+value);
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
        onClickImg={onClickImg} />
}