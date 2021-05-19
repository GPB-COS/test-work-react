import React, { Component } from 'react';
import { push }             from 'connected-react-router';
import { connect }          from 'react-redux';

import ItemList             from './ItemList';

import '../style/ServicesPage.scss';


class ServicesList extends Component {
    constructor(props)
    {
        super(props);
    }

    render() 
    {        
        return (
            <ul className='nav'>
                { this.props.services && this.props.services.map((elem, index) => {
                    return <li key={index} onClick={() => this.props.push(`/${elem.id}/details/`)} >
                        <ItemList text={elem.name} />
                    </li>
                })}
            </ul>
        )
    }
}

export default connect(null, { push })(ServicesList);
