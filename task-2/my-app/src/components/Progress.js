import React, { Component } from 'react';
import { connect }          from 'react-redux'
import { CircularProgress } from '@material-ui/core';

import '../style/App.scss';


class Progress extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() 
    {    
        return (
            <>
                { this.props.loading && <div className='loading'><CircularProgress /></div> }
            </>
        )
    }
}


const mapStateToProps = ({ reducers }) => ({
    loading: reducers.loading,
});

export default connect(mapStateToProps, null)(Progress);