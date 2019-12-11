import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'


export default class ConfirmGenerator extends Component {
    render() {
        
        const { values, labelName } = this.props
        console.log(values)
        return (
            <Grid item xs={12} sm={12}>
            <br/>
            <TextField
                id="standard-read-only-input"
                label={labelName}
                defaultValue={values}
                InputProps={{
                    readOnly: true,
                }}
                />
                
            </Grid>
                
        )
    }
}

