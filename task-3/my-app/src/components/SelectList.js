import React, { Component } from 'react';
import InputLabel           from '@material-ui/core/InputLabel';
import MenuItem             from '@material-ui/core/MenuItem';
import FormControl          from '@material-ui/core/FormControl';
import Select               from '@material-ui/core/Select';


class SelectList extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            value: this.props.defaultValue,
            listData: this.props.data,
        }
    }

    setValue(item)
    {
        this.setState({ value: item });
    }

    handleChange(event) 
    {
        this.setState({ value: event.target.value });
        this.props.sendValue(event.target.value);
    };

    render() 
    {    
        return (
            <div>
                {
                    this.state.value &&  this.state.listData && <FormControl>
                        <InputLabel id='year-label'>{this.props.title}</InputLabel>
                        <Select
                            labelId="year-label"
                            id="year-select"
                            value={this.state.value}
                            onChange={event => this.handleChange(event)}
                        >
                            {
                                this.state.listData.map((elem, index) => {
                                    return <MenuItem key={index} value={elem}>{elem}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                }
            </div>
        )
    }
}



export default SelectList;