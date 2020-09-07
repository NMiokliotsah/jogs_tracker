import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginContainer from '../Login/LoginContainer';
import Info from '../Info/Info';
import JogsContainer from '../Jogs/JogsContainer';
import FormJogsContainer from '../FormJogs/FormsJogsContainer';
import ContactUs from '../ContactUs/ContactUs';

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route path='/jogs' component={JogsContainer} />
            <Route path='/info' component={Info} />
            <Route path='/newJog' component={FormJogsContainer} />
            <Route path='/contact' component={ContactUs} />
        </Switch>
    );
}