import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

//linked files are ReferralFields.js, SourceGenerator.js and ListOfSource.js

export class FormSucess extends Component {

    render() {
        const { values, registerNewApplicant, logout } = this.props

        return (
            <React.Fragment>
            <NavBar navTitle="Terms And Conditions" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position='row' spacing={3} className="textfield-container" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h3>Registration Complete</h3>
                            <p>Please inform the Recruiter that you have successfully completed your registration.</p>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <Button variant="contained" color="primary" onClick={registerNewApplicant}>
                                Register new user
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormSucess
