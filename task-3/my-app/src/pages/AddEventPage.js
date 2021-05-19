import React               from 'react';
import { observer }        from 'mobx-react';

import EventContainer      from '../components/EventCard';
import Notification        from '../components/Notification';
import NotificationForTime from '../components/NotificationForTime';
import BasicPage           from './BasicPage';
import eventsStore         from '../store/EventsStore';

import '../styles/AddEventPage.scss';
import '../styles/App.scss';


class AddEventPage extends BasicPage {
    constructor(props)
    {
        super(props);

        this.state = {
            startTime: null,
            endTime: null,
            reminderTime: 0,
            title: null,
            showingNotice: false,
        }
    }

    addEventToStore()
    {
        if (this.state.endTime > this.state.startTime && this.state.title) {

            const hm = this.state.startTime.split(/\:/);

            eventsStore.addEvent(
                this.props.year, 
                this.props.month, 
                this.props.day, 
                this.props.date, 
                this.getId(), 
                this.state.startTime, 
                this.state.endTime, 
                this.state.title, 
                this.state.reminderTime,
                eventsStore.getTask(
                    this.state.title, 
                    new Date(this.props.year, this.props.month, Number(this.props.day)+1, hm[0], hm[1]), 
                    (this.state.reminderTime * 60000)
                )
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
                <h2>Add event</h2>
                <EventContainer 
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    reminderTimeList={this.reminderTimeList}
                    reminderTime={this.state.reminderTime}
                    title={this.state.title}
                    setEventToStore={() => this.addEventToStore()}
                    titleBtn='Add Event'
                    onChangeTitle={(value) => this.setState({ title: value })}
                    onChangeStartTime={(value) => this.setState({ startTime: value })}
                    onChangeEndTime={(value) => this.setState({ endTime: value })}
                    onChangeReminderTime={(value) => this.setState({ reminderTime: value })}
                />
                <NotificationForTime/>
                <Notification showingNotice={this.state.showingNotice} value='Reminder added successfully!' /> 
            </div>
        )
    }
}


export default observer(AddEventPage); 