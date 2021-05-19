import React, { Component } from 'react';

import CardLabel            from './CardLabel';
import CardContext          from './CardContext';
import { isIE }             from '../utils/browser-utils';

import '../style/all-ie-only.scss';
import '../style/Card.scss';


const IE9 = isIE();


export default class Card extends Component {
    constructor(props)
    {
        super(props);

        this.unique = 'card-component-' + this.props.id;
    }

    render() {
        return (
            <div className={IE9 ? 'card card-ie' : 'card'}>
                <CardLabel
                    unique={this.unique}
                    fullName={this.props.card.fullName}
                    style={IE9 ? 'card-label card-label-ie' : "card-label"} 
                    htmlFor={this.unique}
                />
                <CardContext 
                    style={IE9 ? "card-content card-content-ie" : "card-content"}
                    listAddresses={this.props.card.listAddresses}
                    description={this.props.card.description}
                />
            </div>
        )
    }
}