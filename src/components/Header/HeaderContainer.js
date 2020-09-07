import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { showFilterBar } from '../../redux/jogs-reducers';

class HeaderContainer extends React.Component {
    onClickFilterIcon() {
        this.props.showFilterBar();
    }
    render() {
        return <Header
            showFilterBar={this.props.filterBar}
            showNavbar={this.props.showNavbar}
            onClickFilterIcon={this.onClickFilterIcon.bind(this)} />
    }
}

const mapToStateProps = state => ({
    filterBar: state.jogs.filterBar
});

export default connect(mapToStateProps, { showFilterBar })(HeaderContainer);