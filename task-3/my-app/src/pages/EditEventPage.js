import React               from 'react';
import { observer }        from 'mobx-react';

import EventContainer      from '../components/EventCard';
import Notification        from '../components/Notification';
import eventsStore         from '../store/EventsStore';
import NotificationForTime from '../components/NotificationForTime';
import BasicPage           from './BasicPage';

import '../styles/AddEventPage.scss';
import '../styles/App.scss';


class EditEventPage extends BasicPage {
    constructor(props)
    {
        super(props);

        this._event = this.getEvent();

        this.state = {
            title: this._event.title,
            startTime: this._event.startTime,
            endTime: this._event.endTime,
            reminderTime: this._event.reminderTime,
            showingNotice: false,
        };
    }

    getEvent()
    {
        let event = null;

        eventsStore.events.map((item) => {
            if (item.id == this.props.id) {
                return event = item;
            }
        });

        return event;
    }

    editEvent()
    {
        eventsStore.deleteEvent(this.props.id);
        this.addEventToStore();
    }

    addEventToStore()
    {
        if (this.state.endTime > this.state.startTime && this.state.title) {
            const hm = this.state.startTime.split(/\:/);

            eventsStore.addEvent(
                this.props.year,
                this.props.month,
                this.props.day,
                this._event.date, 
                this.props.id, 
                this.state.startTime || this._event.startTime, 
                this.state.endTime || this._event.endTime, 
                this.state.title || this._event.title, 
                this.state.reminderTime || this._event.reminderTime,
                eventsStore.getTask(
                    this.state.title || this._event.title,
                    new Date(this.props.year, this.props.month, Number(this.props.day)+1, hm[0], hm[1]), 
                    (this.state.reminderTime * 60000))
            );
            this.showNotice();
        } else {
            alert('Incorrect data');
        }
    }

    render()
    {
        return (
            <div className='addEventContainer padding'>
                <h2>Edit event</h2>
                <EventContainer 
                    startTime={this._event.startTime}
                    endTime={this._event.endTime}
                    reminderTimeList={this.reminderTimeList}
                    reminderTime={this._event.reminderTime}
                    title={this._event.title}
                    setEventToStore={() => this.editEvent()}
                    titleBtn='Edit Event'
                    onChangeTitle={(value) => this.setState({ title: value })}
                    onChangeStartTime={(value) => this.setState({ startTime: value })}
                    onChangeEndTime={(value) => this.setState({ endTime: value })}
                    onChangeReminderTime={(value) => this.setState({ reminderTime: value })}
                />
                <NotificationForTime/>
                <Notification showingNotice={this.state.showingNotice} value='Reminder successfully changed!' /> 
            </div>
        )
    }
}


export default observer(EditEventPage);