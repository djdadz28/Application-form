import React, { Component } from 'react'
import ListOfSource from './ListOfSource'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

export class SourceGenerator extends Component {
    

    render() {

        const mainSource = ListOfSource.map((list) => <option key={list.id} value={list.id}>{list.id}</option>)

        

        return (
            
            <FormControl variant="outlined" className="textfield-fullwidth">
                <InputLabel>Source</InputLabel>
                <Select
                native
                labelWidth={80}
                >
                <option value="none"></option>
                {mainSource}

                </Select>
            </FormControl>
            
        )
    }
}

export default SourceGenerator
