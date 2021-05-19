import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';

import { getDetails }       from '../actions/index';
import ItemDetail           from '../components/ItemDetail';
import Error                from '../components/Error';

import '../style/DetailsPage.scss';


class DetailsPage extends Component {
    constructor(props)
    {
        super(props);
    }
    
    async componentDidMount() 
    {
        if (this.props.serviceId)
            this.props.getDetails(this.props.serviceId);
    }

    render() {
        return (
            <>
                { this.props.details &&
                    <div className='containerDetail'>
                        <ItemDetail
                            title={this.props.details.name} 
                            content={this.props.details.content} 
                            price={this.props.details.price} 
                        /> 
                    </div> 
                }               
            </>            
        )
    }
}


const mapStateToProps = ({ reducers }) => ({
    details: reducers.details,
});

const mapDispatchToProps = {
    getDetails: getDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage); 
