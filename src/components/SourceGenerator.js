import React, { Component } from 'react'
import ListOfSource from './ListOfSource'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'

export class SourceGenerator extends Component {
    

    render() {
        const { handleChange, values } = this.props
        const mainSource = ListOfSource.map((list) => <option key={list.id} value={list.id}>{list.id}</option>)
        const specificSource = ListOfSource.filter(list => list.id === values.mainSource ? list : "")
                                .map(item => item.content)
                                .flat()
                                .map(source => <option key={source} value={source}>{source}</option>)

        return (
            <div>
            <Grid container position={'row'} spacing={2} className="textfield-container">
                <Grid item xs={6} sm={6}>
                    <FormControl variant="outlined" className="textfield-fullwidth">
                        <InputLabel>
                        Main Source
                        </InputLabel>
                        <Select
                        native
                        labelWidth={90}
                        defaultValue={values.mainSource}
                        onChange={handleChange('mainSource')}
                        >
                        <option value=""/>
                        {mainSource}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <FormControl variant="outlined" className="textfield-fullwidth">
                        <InputLabel>
                        Specific Source
                        </InputLabel>
                        <Select
                        native
                        labelWidth={112}
                        defaultValue={values.specificSource}
                        onChange={handleChange('specificSource')}
                        >
                        <option value=""/>
                        {specificSource}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default SourceGenerator
