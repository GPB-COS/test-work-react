import React, { Component } from 'react';
import Button               from '@material-ui/core/Button';
import { Link }             from 'react-router-dom';
import { observer }         from 'mobx-react';

import '../styles/Events.scss';


class Events extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
          <>
            {
                this.props.eventsStore && this.props.eventsStore.map((item, index) => {
                    return <div key={index} className='eventField'>
                        <span>{item.title}</span>
                        <div className='btnsField'>
                            <Link target="_blank" to={`/${item.year}/${item.month}/${item.day}/${item.id}/edit`} key={index} >
                                <Button>
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={() => this.props.deleteEvent(item.id)}>
                                Delete
                            </Button>
                        </div>
                    </div>
                })
            }
            { !this.props.eventsStore && <div>No events</div> }
          </>
        )
    }
}


export default observer(Events);