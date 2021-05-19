import React, { Component } from 'react';


export default class Description extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() {
        return (
            <p>{this.props.description}</p>
        )
    }
}