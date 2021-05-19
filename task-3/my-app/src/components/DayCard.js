import React, { Component } from 'react';
import Paper                from '@material-ui/core/Paper';
import { ListItemText }     from '@material-ui/core';

import '../styles/DayCard.scss';


export default class DayCard extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            events: this.handleEvents(),
        };
    }

    handleEvents()
    {
        const listEvents = this.props.events.filter(event => event.date === this.props.date);

        return listEvents.length <  3 ? listEvents : listEvents.slice(0, 2) ;
    }

    render() 
    {
        return (
            <Paper className='dayCard' key={this.props.key}>
                <div className='dayCardNumber'>
                    <ListItemText>{this.props.value}</ListItemText>
                </div>
                <div 
                    className='dayCardEvent' 
                    style={{ color: this.state.events.length > 0 ? 'rgba(0, 0, 0, 0.61)' : 'transparent' }}>
                    {
                        this.state.events && this.state.events.map((item) => {
                            return <div key={this.props.key}>{item.title}</div> ;
                        })
                    }
                </div>
            </Paper>
        )
    }
} 