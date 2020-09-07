import React from 'react';
import JogsItem from './JogsItem';
import { connect } from 'react-redux';
import { setSelectedJog } from '../../redux/jogs-reducers';

class JogsItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jogs: props.jogs,
            redirect: false
        }
    }

    filterDate() {
        const dateFrom = this.props.dateFrom ? new Date(this.props.dateFrom).setHours(0, 0, 0, 0) : null;
        const dateTo = this.props.dateTo ? new Date(this.props.dateTo).setHours(0, 0, 0, 0) : null;

        if (!dateTo && !dateFrom) {
            return this.state.jogs;
        }

        return this.props.jogs.filter(jog => {
            const jogDate = new Date(jog.date).setHours(0, 0, 0, 0);

            if (!dateFrom) {
                if (jogDate <= dateTo) {
                    return jog;
                }
            }

            if (!dateTo) {
                if (jogDate >= dateFrom) {
                    return jog;
                }
            }

            if (jogDate >= dateFrom && jogDate <= dateTo) {
                return jog;
            }
        });
    }
    setRedirect() {
        this.setState({ redirect: true });
    }

    render() {
        return <JogsItem
            jogs={this.props.jogs}
            filterDate={this.filterDate.bind(this)}
            redirect={this.state.redirect}
            setRedirect={this.setRedirect.bind(this)}
            setSelectedJog={this.props.setSelectedJog} />
    }
}

export default connect(null, { setSelectedJog })(JogsItemContainer);
