import React, { Component } from 'react';

import '../styles/Notification.scss';


export default class Notification extends Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <> 
        { this.props.showingNotice && <div className='notification'>
            { this.props.value && this.props.value }
          </div>
        }
      </>
    )
  }
}
