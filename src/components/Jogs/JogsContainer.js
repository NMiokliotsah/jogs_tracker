import React from 'react';
import Jogs from './Jogs';
import { api } from '../../api/api';
import { connect } from 'react-redux';

class JogsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jogs: [],
            dateFrom: null,
            dateTo: null
        }
    }
    addJog() {
        this.props.redirectToNewJog(true);
    }
    handlerInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "dateFrom") {
            this.setState({ dateFrom: value })
        } else if (name === "dateTo") {
            this.setState({ dateTo: value });
        }
    }
    componentDidMount() {
        api.getJogs()
            .then(res => {
                this.setState({ jogs: res.response.jogs });
            });
    }
    render() {
        return <Jogs
            jogs={this.state.jogs}
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
            redirectToFormJog={this.addJog.bind(this)}
            handlerInput={this.handlerInput.bind(this)}
            redirect={this.props.redirect}
            showFilterBar={this.props.showFilterBar} />
    }
}

const mapToStateProps = state => ({
    redirect: state.jogs.redirect,
    showFilterBar: state.jogs.filterBar
});

export default connect(mapToStateProps, {})(JogsContainer);
