import React from 'react';
import Header from './Header';

export default class HeaderContainer extends React.Component {
    render() {
        return <Header showNavbar={this.props.showNavbar} showFilter={this.props.showFilter} />
    }
}