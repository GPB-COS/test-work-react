import React, { Component } from 'react';
import { observer }         from 'mobx-react';

import Events               from '../components/Events';
import NotificationForTime from '../components/NotificationForTime';
import eventsStore          from '../store/EventsStore';

import '../styles/CommonEventsPage.scss';
import '../styles/App.scss';


class EventsPage extends Component {
    render()
    {
        return (
            <div className='eventsOfDayContainer eventsPageH2 padding'>
                <h2>All events</h2>
                { 
                    eventsStore.events &&  <Events 
                        eventsStore={eventsStore.events} 
                        deleteEvent={(id) => eventsStore.deleteEvent(id)} />
                }
                { eventsStore.events.length === 0 && <div>No events</div> }
                <NotificationForTime />
           </div>
        )
    }
}


export default observer(EventsPage); 