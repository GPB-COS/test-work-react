import React, { Component } from 'react';

import Phone                from '../media/image/phone.jpg';

import '../style/CardDetail.scss';


export default class ItemDetail extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() 
    {        
        return (            
            <div className="wrapper">
                <div className="product-img">
                    <img src={Phone} />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                    </div>
                    <div className="product-price">
                        <p><span>{this.props.price}</span> руб.</p>
                    </div>
                    <div className="product-btn">
                        <button type="button">заказать</button>
                    </div>
                </div>
            </div>
        )
    }
}
