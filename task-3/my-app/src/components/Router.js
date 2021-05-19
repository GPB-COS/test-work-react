import React             from 'react';
import { Switch, Route } from "react-router-dom";

import CalendarPage      from '../pages/CalendarPage';
import AddEventPage      from '../pages/AddEventPage';
import EventsPage        from '../pages/EventsPage';
import EditEventPage     from '../pages/EditEventPage';
import EventsOfDayPage   from '../pages/EventsOfDayPage';


export default class Router extends React.Component
{  
    render() 
    {
        return (
            <>
                <Switch> 
                    <Route exact path='/' component={ CalendarPage } />
                    <Route exact path='/:year/:month/:day/add' render={ (obj) => 
                        <AddEventPage
                            date={ obj.match.params.year+obj.match.params.month+obj.match.params.day } 
                            year={ obj.match.params.year }
                            month={ obj.match.params.month }
                            day={ obj.match.params.day }
                            key={ obj.match.params.year+obj.match.params.month+obj.match.params.day }
                        />
                    }
                    />
                    <Route exact path='/:year/:month/:day/events_of_day' render={ (obj) => 
                        <EventsOfDayPage 
                            date={ obj.match.params.year+obj.match.params.month+obj.match.params.day }
                            year={ obj.match.params.year }
                            month={ obj.match.params.month }
                            day={ obj.match.params.day }
                            key={  obj.match.params.year+obj.match.params.month+obj.match.params.day }
                        />
                    }
                    />
                    <Route exact path='/events' component={ EventsPage } />
                    <Route exact path='/:year/:month/:day/:idEvent/edit' render={ (obj) => 
                        <EditEventPage 
                            year={ obj.match.params.year }
                            month={ obj.match.params.month }
                            day={ obj.match.params.day }
                            id={ obj.match.params.idEvent }
                            key={ obj.match.params.idEvent }
                        />
                    }
                    />

                </Switch>
            </>
        )
    }
}