import React from 'react';
import JogsItem from './JogsItem';

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}

const rounded = number => {
    return +number.toFixed(2);
}

export default class JogsItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jogs: props.jogs
        }
    }

    refactoringDate(date) {
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
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
    calculateSpeed(distance, time) {
        return rounded((distance / 100) / time);
    }
    refactoringDistance(distance) {
        return (distance / 100);
    }

    render() {
        return <JogsItem
            jogs={this.props.jogs}
            refactoringDate={this.refactoringDate}
            calculateSpeed={this.calculateSpeed}
            refactoringDistance={this.refactoringDistance}
            filterDate={this.filterDate.bind(this)} />
    }
}