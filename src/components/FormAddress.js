import React, { Component } from 'react'
import HeaderTracker from './HeaderTracker'
import AppBar from '@material-ui/core'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import Divider from '@material-ui/core/Divider'

export class FormAddress extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container">
                        <Grid item xs={12}>
                            <HeaderTracker currentPage={this.props.curPage}/>
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="City/Municipality"
                            placeholder="e.g. Dumaguete"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Province"
                            placeholder="e.g. Negros Oriental"
                            className="textfield-fullwidth"
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="City/Municipality"
                            placeholder="e.g. Dumaguete"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Province"
                            placeholder="e.g. Negros Oriental"
                            className="textfield-fullwidth"
                            />
                        </Grid>


                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={this.props.prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={this.props.nextPage}>
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
