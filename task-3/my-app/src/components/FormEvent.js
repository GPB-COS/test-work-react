import React, { Component } from 'react';

import TextField            from '@material-ui/core/TextField';
import MenuItem             from '@material-ui/core/MenuItem';
import InputTimeField       from './InputTimeField';
import Button               from '@material-ui/core/Button';

import '../styles/FormEvent.scss';


export default class FormEvent extends Component {  
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <form>
        <div className='formAddEvent'>
          <TextField    
              defaultValue={this.props.title || ''}  
              id="standard-basic" 
              label="Title of event" 
              autoFocus  
              required 
              onChange={(event) => this.props.onChangeTitle(event.target.value)}
          />
          <InputTimeField 
              title='Starting time' 
              defaultValue={this.props.startTime}
              sendValue={(time) => this.props.onChangeStartTime(time)}
          />
          <InputTimeField 
              title='End time' 
              defaultValue={this.props.endTime}
              sendValue={(time) => this.props.onChangeEndTime(time)}
          />
          <TextField
            
            id="standard-select-currency"
            select
            label="Reminder time"
            defaultValue={this.props.reminderTime}
            onChange={(event) => this.props.onChangeReminderTime(event.target.value)} 
            helperText="Please select your time"
          >
            {this.props.reminderTimeList.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button variant="contained" color="primary" onClick={() => this.props.setEventToStore()}>
          {this.props.titleBtn}
        </Button>
      </form>
    )
  }
}
