import React, { Component } from 'react';
import FormEvent            from './FormEvent';

import '../styles/EventCard.scss';


export default class EventCard extends Component {
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return (
      <div className='eventCard'>
        <FormEvent
          startTime={this.props.startTime}
          endTime={this.props.endTime}
          reminderTimeList={this.props.reminderTimeList}
          reminderTime={this.props.reminderTime}
          title={this.props.title}
          setEventToStore={() => this.props.setEventToStore()}
          titleBtn={this.props.titleBtn}
          onChangeTitle={(value) => this.props.onChangeTitle(value)}
          onChangeStartTime={(value) => this.props.onChangeStartTime(value)}
          onChangeEndTime={(value) =>this.props.onChangeEndTime(value)}
          onChangeReminderTime={(value) => this.props.onChangeReminderTime(value)}
        />
      </div>
    )
  }
}