import React, { Component } from 'react'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import NavBar from './NavBar'



export class FormPrint extends Component {


    render() {

        const { values, nextPage, handleChange, logout} = this.props
        
        return (
            <React.Fragment>
                <NavBar navTitle="Applicant Data" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormPrint
