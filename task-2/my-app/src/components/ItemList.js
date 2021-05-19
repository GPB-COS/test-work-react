import React, { Component } from 'react';

import Icon                 from '../media/image/icon2.svg';

import '../style/ItemList.scss';


export default class ItemList extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() 
    {        
        return (
            <div className='item'>
                <div className='item-img'>
                    <img src={Icon} />
                </div>
                <div className='item-text'>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
