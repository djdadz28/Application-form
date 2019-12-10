import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import ConfirmGenerator from './ConfirmGenerator'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

//linked files are ReferralFields.js, SourceGenerator.js and ListOfSource.js

export class FormConfirmation extends Component {



    render() {
        const { values, nextPage, prevPage, handleChange } = this.props

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
                            <ConfirmGenerator/>
                        </Grid>

                        <Grid item xs={12} sm={12}></Grid>




                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={nextPage}>
                                Finish
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormConfirmation
