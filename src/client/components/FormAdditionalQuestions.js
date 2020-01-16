import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'


export class FormAdditionalQuestions extends Component {

    render() {
        const { values, home, nextPage, prevPage, handleChange, logout} = this.props
        
        const fields = [ values.aq_currentlyEnrolled, values.aq_studyPlan, values.aq_hireDate, values.aq_convicted, values.aq_hospitalize, values.aq_medicalCondition, values.aq_medication ]
        
        const checkRadioButtons = () => {
            for(let i = 0; i < fields.length; i++){
                if(fields[i] === ""){
                    return false
                }
            }
            return true
        }

        const styles = {
            fontSize: "13px"
        }
        

        return (
            <React.Fragment>
            <NavBar navTitle="Additional Questions" logout={logout} home={home}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position='row' spacing={3} className="textfield-container" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            <form id="form-Additional-questions" onSubmit={(e)=> {e.preventDefault(); checkRadioButtons() && nextPage()}}>
                                <Grid container position={'row'} spacing={2} justify="center">
                                    <Grid item xs={12}>
                                        <br/><Divider variant="middle" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Are you currently enrolled?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_currentlyEnrolled}
                                                onChange={handleChange('aq_currentlyEnrolled')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {values.aq_currentlyEnrolled === "Yes" && <Grid item xs={6} sm={6}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="number"
                                        label="Number of Units"
                                        placeholder="e.g. 15"
                                        fullWidth
                                        defaultValue={values.aq_numberOfUnits}
                                        onChange={handleChange('aq_numberOfUnits')}
                                        required
                                        />
                                    </Grid>}
                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Any plans of pursuing studies?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_studyPlan}
                                                onChange={handleChange('aq_studyPlan')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                    </Grid>
                                    
                                    <Grid item xs={10} sm={8}>
                                        <TextField
                                        id="date"
                                        label="If hired, when can you start working?"
                                        type="date"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        className="textfield-fullwidth"
                                        defaultValue={values.aq_hireDate}
                                        onChange={handleChange('aq_hireDate')}
                                        required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                    </Grid>

                                    <Grid item xs={12} sm={8}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Have you ever been convicted of a criminal offense (Felony or misdemeanor)?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_convicted}
                                                onChange={handleChange('aq_convicted')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        
                                    </Grid>
                                    {values.aq_convicted === "Yes" && <Grid item xs={12} sm={4}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        multiline
                                        label="State the reason"
                                        placeholder="Provide a brief explaination"
                                        fullWidth
                                        defaultValue={values.aq_convictReason}
                                        onChange={handleChange('aq_convictReason')}
                                        required
                                        />
                                    </Grid>}
            <i style={styles}>Note: No applicant will be denied of employment solely on the grounds of conviction of a criminal offense. The date of the offense, the nature of the offense, including any significant details that affect the description of the event, and the surrounding circumstances and the relevance of the offense to the position(s) applied for may, however, be considered.</i>
                                    
                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                    </Grid>

                                    <Grid item xs={12} sm={8}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Have you ever been hospitalized or have undergone surgery before?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_hospitalize}
                                                onChange={handleChange('aq_hospitalize')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    {values.aq_hospitalize === "Yes" && <Grid item xs={12} sm={4}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Please Specify"
                                        placeholder="e.g. Pregnancy"
                                        fullWidth
                                        defaultValue={values.aq_hospitalizeReason}
                                        onChange={handleChange('aq_hospitalizeReason')}
                                        required
                                        />
                                    </Grid>}

                                    <Grid item xs={12} sm={8}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Do you have any pre-existing medical conditions?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_medicalCondition}
                                                onChange={handleChange('aq_medicalCondition')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    {values.aq_medicalCondition === "Yes" && <Grid item xs={12} sm={4}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Please specify"
                                        placeholder="Medical condition"
                                        fullWidth
                                        defaultValue={values.aq_medicalConditionReason}
                                        onChange={handleChange('aq_medicalConditionReason')}
                                        required
                                        />
                                    </Grid>}
                                    <Grid item xs={12} sm={8}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Are you taking any kind or form of medication?</FormLabel>
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.aq_medication}
                                                onChange={handleChange('aq_medication')}
                                            >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    {values.aq_medication === "Yes" && <Grid item xs={12} sm={4}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Please specify"
                                        placeholder="Medical condition"
                                        fullWidth
                                        defaultValue={values.aq_medicationReason}
                                        onChange={handleChange('aq_medicationReason')}
                                        required
                                        />
                                    </Grid>}

                                    <Grid item xs={6} sm={6}container justify="flex-start">
                                        <Button variant="contained" onClick={prevPage}>
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6}container justify="flex-end">
                                        <Button variant="contained" color="primary" type="submit" form="form-Additional-questions">
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

export default FormAdditionalQuestions
