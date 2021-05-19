import React, { Component } from 'react';
import { observer }         from 'mobx-react';
import CloseIcon            from '@material-ui/icons/Close';

import eventsStore          from '../store/EventsStore';

import '../styles/Notification.scss';


class NotificationForTime extends Component {
    render() 
    {    
        return (
            <>
                { eventsStore.showNotification && 
                    <div className='notificationTime'>
                        <div>
                            <CloseIcon onClick={ () => eventsStore.setShowNotification() } />
                        </div>
                        <p>Event coming soon:</p>
                        <p>"{eventsStore.showNotification[0]}"</p>
                        <p>Start today at {eventsStore.showNotification[1]}</p>
                    </div> 
                }
            </>
        )
    }
}


export default observer(NotificationForTime);