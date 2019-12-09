import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'


export class FormWorkExperience extends Component {

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
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">With BPO/Call Center Experience?</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" row className="radio-button-center">
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Are you a former Qualfon Philippines Inc. Employee?</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" row className="radio-button-center">
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Recent Employment<br />
                            <i>(Optional - Skip this page if you have no work experience yet)</i>
                            </h4>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Company Name"
                            placeholder="If BPO: Start with (BPO - ) e.g. BPO - Qualfon"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Position"
                            placeholder="Enter Job Title"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                                <InputLabel>
                                Duration
                                </InputLabel>
                                <Select
                                native
                                labelWidth={80}
                                defaultValue={values.collegeAttainment}
                                onChange={handleChange('collegeAttainment')}
                                >
                                <option value=""/>
                                <option value="1st Year Level">1 - 6 Months</option>
                                <option value="2nd Year Level">6 - 11 Months</option>
                                <option value="3rd Year Level">1 to 2 Years</option>
                                <option value="4th Year Level">2 to 5 Years</option>
                                <option value="5th Year Level">Above 5 Years</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                            id="standard-textarea"
                            label="Reason for Leaving"
                            placeholder="Please provide a brief explanation"
                            variant="outlined"
                            multiline
                            className="textfield-fullwidth"
                            margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                            <h4>Additional Employment Background</h4>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Company Name"
                            placeholder="If BPO: Start with (BPO - ) e.g. BPO - Qualfon"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Position"
                            placeholder="Enter Job Title"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                                <InputLabel>
                                Duration
                                </InputLabel>
                                <Select
                                native
                                labelWidth={80}
                                defaultValue={values.collegeAttainment}
                                onChange={handleChange('collegeAttainment')}
                                >
                                <option value=""/>
                                <option value="1st Year Level">1 - 6 Months</option>
                                <option value="2nd Year Level">6 - 11 Months</option>
                                <option value="3rd Year Level">1 to 2 Years</option>
                                <option value="4th Year Level">2 to 5 Years</option>
                                <option value="5th Year Level">Above 5 Years</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                            id="standard-textarea"
                            label="Reason for Leaving"
                            placeholder="Please provide a brief explanation"
                            variant="outlined"
                            multiline
                            className="textfield-fullwidth"
                            margin="normal"
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

export default FormWorkExperience
