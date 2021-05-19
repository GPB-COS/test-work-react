import React, { Component } from 'react';
import { connect }          from 'react-redux'
import ButtonError          from '../components/Button';
import { 
    getServices,
    getDetails }            from '../actions/index';

import '../style/Error.scss';


class Error extends Component {
    constructor(props)
    {
        super(props);
    }
    
    getId()
    {
        const group = /^\/([^\/]+)\/details/g.exec(this.props.pathname);

        return group && group.length > 0 ? group.pop():null;
    }

    getData()
    {
        this.props.getServices();
        this.props.getDetails(this.getId());
    }

    render() 
    {  
        return (
            <>                
                { this.props.error && <div className='error'>
                    <p>Произошла ошибка</p>
                    <ButtonError className='errorBtn' text='Повторить запрос' onClick={ () => this.getData() } />   
                </div> }
            </>
        )
    }
}

const mapStateToProps = ({ reducers, router }) => ({
    error: reducers.error,  
    pathname: router.location.pathname,
});

const mapDispatchToProps = {
    getServices: getServices,
    getDetails: getDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);