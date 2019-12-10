import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'


export default class ConfirmGenerator extends Component {
    render() {
        
        return (
                <TextField
                id="standard-read-only-input"
                label="Complete Name"
                defaultValue="DJ Dadz Montero Eleco"
                InputProps={{
                    readOnly: true,
                }}
                />
        )
    }
}

