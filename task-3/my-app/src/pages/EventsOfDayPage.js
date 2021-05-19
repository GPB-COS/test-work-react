import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Button               from '@material-ui/core/Button';
import { observer }         from 'mobx-react';

import eventsStore          from '../store/EventsStore';
import Events               from '../components/Events';
import NotificationForTime from '../components/NotificationForTime';

import '../styles/CommonEventsPage.scss';
import '../styles/App.scss';


class EventsOfDayPage extends Component {
    getEvents()
    {
        return eventsStore.events.filter(event => event.date == this.props.date);
    }

    render()
    {
        return (
            <div className='eventsOfDayContainer padding'>
                <div className='titleField'>
                    <h2>Events of day</h2>
                    <Link target="_blank" to={`/${this.props.year}/${this.props.month}/${this.props.day}/add`} >
                        <Button variant="contained" color="primary">Add event</Button>
                    </Link>
                </div>
                <Events eventsStore={this.getEvents()} deleteEvent={(id) => eventsStore.deleteEvent(id)} />
                <NotificationForTime />
            </div>
        )
    }
}


export default observer(EventsOfDayPage);