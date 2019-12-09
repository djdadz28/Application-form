import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import SourceGenerator from './SourceGenerator'


export class FormSourcingChannel extends Component {

    render() {
        const { values, nextPage, prevPage, handleChange} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Personal Information"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>
                    </Grid>
                    <h2 style={{color: "red"}}>Under Construction</h2>
                    <Grid container position={'row'} spacing={3} className="textfield-container" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12} sm={4}>
                            {<SourceGenerator/>}
                        </Grid>
                        
                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={nextPage}>
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormSourcingChannel
