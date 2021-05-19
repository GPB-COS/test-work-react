import React, { Component } from 'react';

import Description from './Description';
import List        from './List';


export default class CardContext extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className={this.props.style}>
                <List items={this.props.listAddresses} />
                <Description description={this.props.description} />
            </div>
        )
    }
}