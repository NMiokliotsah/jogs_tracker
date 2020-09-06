import React, { useState } from 'react';
import Login from './Login';
import { api } from '../../api/api';

export default function LoginContainer() {
    const [redirect, setRedirect] = useState(false);

    const onClick = async () => {
        await api.getToken()
            .then(res => {
                localStorage.setItem("token", res.response.access_token);
                setRedirect(true);
            });
    }

    return <Login onClick={onClick} redirect={redirect} />
}