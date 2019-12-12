import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import SnackbarContent from '@material-ui/core/SnackbarContent'

export class FormAddress extends Component {


    render() {
        const { values, nextPage, prevPage, handleChange, validate, logout} = this.props

        const fields = [values.permanentAddressBrgy,
                        values.permanentAddressCity,
                        values.permanentAddressProvince,
                        values.currentAddressBrgy,
                        values.currentAddressCity,
                        values.currentAddressProvince
                        ]
        console.log(fields)
        return (
            <React.Fragment>
            <NavBar navTitle="Address" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            <form id="form-address" onSubmit={(e)=> {e.preventDefault(); nextPage()}}>
                                <Grid container position={'row'} spacing={2} justify="space-between">
                                    <Grid item xs={12}>
                                    <br/>
                                    <Divider variant="middle" />
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                        />
                                    </Grid>

                                    <Grid item xs={6} sm={6}container justify="flex-start">
                                        <Button variant="contained" onClick={prevPage}>
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6}container justify="flex-end">
                                        <Button variant="contained" color="primary" type="submit" htmlFor="form-address">
                                            Continue
                                        </Button>
                                    
                                </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormAddress
