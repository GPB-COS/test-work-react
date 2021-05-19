import React, { Component } from 'react';

import Title                from './Title';


export default class CardLabel extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() {
        return (
            <>
                <input type="checkbox" id={this.props.unique}/>
                <label className={this.props.style} htmlFor={this.props.unique}>
                    <Title title={this.props.fullName} />
                </label>
            </>
        )
    }
}