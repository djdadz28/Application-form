import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'


export class FormViewRecords extends Component {

    render() {
        const { values, register, viewRecords, handleChange, logout} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Select" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12} sm={12}>
                            <b>CHOOSE YOUR DESTINY</b>
                            <br/><br/><Divider variant="middle" />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Button className="selectionPane" variant="contained" color="primary" onClick={register}>
                            Register New Applicant
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button className="selectionPane" variant="contained" onClick={viewRecords}>
                            View & Print Records
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        </Grid>                                                
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormViewRecords
