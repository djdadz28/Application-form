import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

export class FormAddress extends Component {


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
                    <Grid container position={'row'} spacing={3} className="textfield-container" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <h4>Permanent Address</h4>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Barangay"
                            placeholder="e.g. Taclobo"
                            className="textfield-fullwidth"
                            defaultValue={values.permanentAddressBrgy}
                            onChange={handleChange('permanentAddressBrgy')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="City/Municipality"
                            placeholder="e.g. Dumaguete"
                            className="textfield-fullwidth"
                            defaultValue={values.permanentAddressCity}
                            onChange={handleChange('permanentAddressCity')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Province"
                            placeholder="e.g. Negros Oriental"
                            className="textfield-fullwidth"
                            defaultValue={values.permanentAddressProvince}
                            onChange={handleChange('permanentAddressProvince')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                            <h4>Current Address</h4>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Barangay"
                            placeholder="e.g. Taclobo"
                            className="textfield-fullwidth"
                            defaultValue={values.currentAddressBrgy}
                            onChange={handleChange('currentAddressBrgy')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="City/Municipality"
                            placeholder="e.g. Dumaguete"
                            className="textfield-fullwidth"
                            defaultValue={values.currentAddressCity}
                            onChange={handleChange('currentAddressCity')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Province"
                            placeholder="e.g. Negros Oriental"
                            className="textfield-fullwidth"
                            defaultValue={values.currentAddressProvince}
                            onChange={handleChange('currentAddressProvince')}
                            />
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

export default FormAddress
