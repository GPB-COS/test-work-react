import React, { Component } from 'react';

import Card                 from '../components/Card';

import '../style/PageCards.scss'


export default class Cards extends Component {
    constructor(props) { 
        super(props); 

        this.state = {
            cards: []
        };     
    } 

    async componentDidMount() 
    {
        try {
            let response = await fetch('http://localhost:7070/api/cards');
            let cards    = await response.json();

            this.setState({ cards: cards });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='cardsList'>
                    {this.state.cards && this.state.cards.map((elem, id) => {
                        return <Card card={elem} key={id} id={id} />
                    })}
                </div>
            </div>
            
        )
    }
}
