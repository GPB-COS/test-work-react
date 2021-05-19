import React, { Component } from 'react';
import TextField            from '@material-ui/core/TextField';


export default class InputTimeField extends Component {
  constructor(props)
  {
    super(props);
  }

  handleTimeChange(time) 
  {
    this.props.sendValue(time);
  };
  
  render()
  {
    return (
      <>
        <TextField
            id="time"
            label={this.props.title}
            type="time"
            defaultValue={this.props.defaultValue || ''}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            onChange={(event) => this.handleTimeChange(event.target.value)}
        />
      </>
    )
  }
}