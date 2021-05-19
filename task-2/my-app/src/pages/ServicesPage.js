import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServicesList          from '../components/ServicesList';

import { getServices } from '../actions/index';

import '../style/ServicesPage.scss'


class ServicesPage extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <>
                { this.props.services &&
                    <div className='containerNav'>
                        <ServicesList services={this.props.services} /> 
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = ({ reducers }) => ({
    services: reducers.services,
    //error: servicesReducer.error,
})

const mapDispatchToProps = {
    getServices: getServices,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);