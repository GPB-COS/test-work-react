import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Button               from '@material-ui/core/Button';

import date                 from '../utils/Date';
import SelectList           from './SelectList';
import DaysList             from './DaysList';

import '../styles/Calendar.scss';
import '../styles/App.scss';


class Calendar extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            month: date.getCurrentMonth(),
            year:  date.getCurrentYear(),
        }
    }

    conversionMonthToDate(month=this.state.month)
    {
        const months = date.getMonths();
        let id       = null;

        months.forEach((value, index) => {
            if (month === value) 
            {
                return id = index;
            }
        })

        return id;
    }

    render() 
    {    
        return (
            <div className='padding' key={this.props.key}> 
                { 
                    this.state.month && this.state.year && <>
                        <div className='containerCalendar'>
                            <Link className='linkToEvents' target="_blank" to={`/events`}>
                            <Button color="primary" size="large">Events</Button> 
                            </Link>
                            <div className='inputsField'>
                                <SelectList 
                                    title={'Years'} 
                                    defaultValue={date.getCurrentYear()} 
                                    data={date.getYears(2030)}
                                    sendValue={(year) => this.setState({ year: year })}
                                />
                                <SelectList 
                                    title={'Months'} 
                                    defaultValue={date.getCurrentMonth()} 
                                    data={date.getMonths()} 
                                    sendValue={(month) => this.setState({ month: month })}
                                />
                            </div>
                        </div>
                        <DaysList 
                            events={this.props.events}
                            month={this.conversionMonthToDate(this.state.month)}
                            year={this.state.year}
                            data={
                                date.getDays(this.state.year, this.conversionMonthToDate(this.state.month))
                            } 
                        />   
                    </>   
                }
            </div>
        )
    }
}


export default Calendar;