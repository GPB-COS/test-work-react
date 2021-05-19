import React, { Component } from 'react';
import { List, ListItem }   from '@material-ui/core';
import { Link }             from 'react-router-dom';

import DayCard              from './DayCard';

import '../styles/DaysList.scss';


export default class DaysList extends Component {
    constructor(props)
    {
        super(props);
    }

    render() 
    {    
        const weekdays = [ 'Sunday', 'Monday',	'Tuesday',	'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

        return (
            <div>
                <div className='dayListContainer'>
                    <List className='daysList'>
                    {
                        weekdays.map((elem, index) => <div key={`card-${index}-${index}`} className="weekday">{elem}</div>)
                    }
                    </List>
                </div>
                <div className='dayListContainer'>
                    <List className='daysList'>
                        {
                            this.props.data.map((elem, index) => {
                                const date = `${this.props.year}${this.props.month}${elem}`;

                                return <div key={`card-${index}-${date}`}>
                                    <Link  
                                        className='dayItem' 
                                        target="_blank" 
                                        to={`/${this.props.year}/${this.props.month}/${elem}/events_of_day`} 
                                        key={`link-${index}-${date}`} 
                                    >
                                        <ListItem 
                                            button
                                        >
                                            <DayCard 
                                                key={`day-card-${index}-${date}`} 
                                                events={this.props.events} 
                                                date={date} 
                                                value={elem} 
                                            />
                                        </ListItem>
                                    </Link>
                                </div> 
                            })
                        }
                    </List>
                </div>
            </div>
        )
    }
}
