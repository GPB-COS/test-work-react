import React             from 'react';
import { Switch, Route } from "react-router-dom";

import DetailsPage       from '../pages/DetailsPage';
import ServicesPage      from '../pages/ServicesPage';


export default class Router extends React.Component
{  
    render() 
    {
        return (
            <>
                <Switch> 
                    <Route exact path='/' component={ServicesPage} />
                    <Route exact path='/:id/details/' render={ (obj) =>
                        <DetailsPage serviceId={ obj.match.params.id } key={ obj.match.params.id }/> } 
                    />
                </Switch>
            </>
        )
    }
}
