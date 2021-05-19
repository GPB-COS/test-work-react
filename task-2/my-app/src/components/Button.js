import React, { Component } from 'react';
import { Button }           from '@material-ui/core';

import '../style/Error.scss';


export default class ButtonError extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() 
    {        
        return (
            <div>
                <Button variant="contained" color="primary" className='errorBtn' onClick={ () => this.props.onClick() }>{this.props.text}</Button>
            </div>
        )
    }
}
