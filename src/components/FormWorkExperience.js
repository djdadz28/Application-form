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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import SnackbarContent from '@material-ui/core/SnackbarContent'


export class FormWorkExperience extends Component {

    render() {
        const { values, nextPage, prevPage, handleChange, validate} = this.props
        
        const fields = [values.workBpoExperience, values.workQualfonEmployee]

        return (
            <React.Fragment>
            <NavBar navTitle="Work Experience"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">With BPO/Call Center Experience?</FormLabel>
                                <RadioGroup 
                                    aria-label="gender"
                                    row
                                    className="radio-button-center"
                                    defaultValue={values.workBpoExperience}
                                    onChange={handleChange('workBpoExperience')}
                                >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Are you a former Qualfon Philippines Inc. Employee?</FormLabel>
                                <RadioGroup 
                                    aria-label="gender"
                                    name="workQualfonEmployee"
                                    row
                                    className="radio-button-center"
                                    defaultValue={values.workQualfonEmployee}
                                    onChange={handleChange('workQualfonEmployee')}
                                >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Recent Employment<br />
                            <i style={{fontSize: '11px'}}>(Optional - Skip this page if you don't have any work experience yet)</i>
                            </h4>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Company Name"
                            placeholder="If BPO: Start with (BPO - ) e.g. BPO - Qualfon"
                            className="textfield-fullwidth"
                            defaultValue={values.workCompany}
                            onChange={handleChange('workCompany')}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Position"
                            placeholder="Enter Job Title"
                            className="textfield-fullwidth"
                            defaultValue={values.workPosition}
                            onChange={handleChange('workPosition')}
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
                                defaultValue={values.workDuration}
                                onChange={handleChange('workDuration')}
                                >
                                <option value=""/>
                                <option value="1 - 6 Months">1 - 6 Months</option>
                                <option value="6 - 11 Months">6 - 11 Months</option>
                                <option value="1 to 2 Years">1 to 2 Years</option>
                                <option value="2 to 5 Years">2 to 5 Years</option>
                                <option value="Above 5 Years">Above 5 Years</option>
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
                            defaultValue={values.workReasonForLeaving}
                            onChange={handleChange('workReasonForLeaving')}
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
                            defaultValue={values.workCompany_2}
                            onChange={handleChange('workCompany_2')}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Position"
                            placeholder="Enter Job Title"
                            className="textfield-fullwidth"
                            defaultValue={values.workPosition_2}
                            onChange={handleChange('workPosition_2')}
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
                                defaultValue={values.workDuration_2}
                                onChange={handleChange('workDuration_2')}
                                >
                                <option value=""/>
                                <option value="1 - 6 Months">1 - 6 Months</option>
                                <option value="6 - 11 Months">6 - 11 Months</option>
                                <option value="1 to 2 Years">1 to 2 Years</option>
                                <option value="2 to 5 Years">2 to 5 Years</option>
                                <option value="Above 5 Years">Above 5 Years</option>
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
                            defaultValue={values.workReasonForLeaving_2}
                            onChange={handleChange('workReasonForLeaving_2')}
                            />
                        </Grid>
                        {values.isError && <Grid item xs={12}>
                            <SnackbarContent
                                aria-describedby="client-snackbar"
                                message={
                                    <span id="client-snackbar">* Please fill out the required field</span>
                                }
                                style={{backgroundColor: "#d32f2f"}}
                            />
                        </Grid>}


                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={()=> validate(fields) && nextPage()}>
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
