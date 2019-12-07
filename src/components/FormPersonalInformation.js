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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export class FormPersonalInformation extends Component {
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
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="First Name"
                            placeholder="Enter First Name"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Middle Name"
                            placeholder="Enter Middle Name"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Last Name"
                            placeholder="Enter Last Name"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2019-12-10"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Birth Place"
                            placeholder="Barangay, City"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                            <InputLabel>
                            Gender
                            </InputLabel>
                            <Select
                            native
                            labelWidth={52}
                            >
                            <option value="" />
                            <option value={10}>Male</option>
                            <option value={20}>Female</option>

                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                            <InputLabel>
                            Civil Status
                            </InputLabel>
                            <Select
                            native
                            labelWidth={80}
                            >
                            <option value="" />
                            <option value={10}>Single</option>
                            <option value={20}>Married</option>
                            <option value={30}>Widow</option>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Citizenship"
                            placeholder="e.g. Filipino"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={12} container justify="flex-end">
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

export default FormPersonalInformation
