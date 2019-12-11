import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import ConfirmGenerator from './ConfirmGenerator'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

//linked files are ReferralFields.js, SourceGenerator.js and ListOfSource.js

export class FormConfirmation extends Component {


        
    render() {
        const { values, nextPage, prevPage } = this.props

        const listOfLabel = [
            {
                id: "First Name",
                content: values.firstName
            },
            {
                id: "Middle Name",
                content: values.middleName
            },
            {
                id: "Last Name",
                content: values.lastName
            },
            {
                id: "Birth Day",
                content: values.birthDay
            },
            {
                id: "Mobile Number",
                content: values.mobileNumber
            },
            {
                id: "Email Address",
                content: values.emailAddress
            }

        ]

        const confirmlist = listOfLabel.map(list => <ConfirmGenerator key={list.id} values={list.content} labelName={list.id}/>)
        return (
            <React.Fragment>
            <NavBar navTitle="Confirmation"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position='row' spacing={3} className="textfield-container" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <h4>Confirm Information</h4>
                            {confirmlist}
                        </Grid>

                        <Grid item xs={12} sm={12}></Grid>




                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={nextPage}>
                                Confirm and Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormConfirmation
