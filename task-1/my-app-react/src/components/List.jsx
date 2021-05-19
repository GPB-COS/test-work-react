import React, { Component } from 'react';


export default class List extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() {
        return (
            <ul>
                {this.props.items && this.props.items.map((item, id) => {
                    return  <li key={id}>{item}</li>
                })}
            </ul>   
        )
    }
}