import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SourceGenerator from './SourceGenerator'
import ReferralFields from './ReferralFields'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import Divider from '@material-ui/core/Divider'


//linked files are ReferralFields.js, SourceGenerator.js and ListOfSource.js

export class FormSourcingChannel extends Component {

    render() {
        const { values, nextPage, prevPage, handleChange, checkReferralFields, validate, logout} = this.props

        const fields = [ values.sourceMethod, values.invitedByRecruiter, values.mainSource, values.specificSource ]

        const listOfRecruiters = [
                "Aileen",
                "Coleen",
                "Christine",
                "Dann",
                "DJ",
                "Dwight",
                "Edgar",
                "Hana",
                "Hazel",
                "Jijie",
                "Jacel",
                "Johanna",
                "Joseph",
                "Kenneth",
                "Lovelie",
                "Nicole",
                "Rhea",
                "Riden",
                "Sharlene",
                "Tanja",
                "Vir"
        ]

    const recruiter = listOfRecruiters.map(list => <option key={list} value={list} >{list}</option>)

    const checkSourceFields = () => {
        if(values.sourceMethod === '' || values.invitedByRecruiter === ''){
            return false
        }else{
            return true
        }
    }
        
        return (
            <React.Fragment>
            <NavBar navTitle="Sourcing Channel" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            <form id="form-sourcing-channel" onSubmit={(e)=> {e.preventDefault(); checkSourceFields() && nextPage()}}>
                                    <Grid container position={'row'} spacing={2} justify="space-between">
                                        <Grid item xs={12}>
                                            <br/><Divider variant="middle" />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                        <FormControl component="fieldset">
                                            <RadioGroup 
                                                row
                                                className="radio-button-center"
                                                defaultValue={values.sourceMethod}
                                                onChange={handleChange('sourceMethod')}
                                            >
                                                <FormControlLabel value="Walk in" control={<Radio />} label="Walk in" />
                                                <FormControlLabel value="Phonescreened" control={<Radio />} label="Phonescreened" />
                                            </RadioGroup>
                                        </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <FormControl component="fieldset">
                                            <FormLabel component="legend">Did you receive an invitation from a Recruiter? *</FormLabel>
                                                <RadioGroup 
                                                    row
                                                    className="radio-button-center"
                                                    defaultValue={values.invitedByRecruiter}
                                                    onChange={handleChange('invitedByRecruiter')}
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        {values.invitedByRecruiter === "Yes" && <Grid item xs={6} sm={6}>
                                            <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            Recruiter
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={80}
                                            defaultValue={values.recruiter}
                                            onChange={handleChange('recruiter')}
                                            required
                                            >
                                            <option value="" />
                                            {recruiter}
                                            </Select>
                                        </FormControl>
                                        </Grid>}
                                        <Grid item xs={12}>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid item xs={12}>
                                        
                                            {<SourceGenerator handleChange={handleChange} values={values}/>}
                                            {(values.mainSource === "Referrals" && values.specificSource !== "" && values.specificSource !== "") && <ReferralFields handleChange={handleChange} values={values}/>}
                                            
                                        </Grid>
                                        {values.mainSource === "Job Fairs" && values.specificSource !== "" && <Grid container spacing={2}>
                                            <Grid item xs={10} sm={12}>
                                            <FormControl>
                                            <TextField
                                            key="confirmation_code"
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Job Fair Location"
                                            placeholder="e.g. PESO"
                                            fullWidth
                                            required
                                            defaultValue={values.jobFairLocation}
                                            onChange={handleChange('jobFairLocation')}
                                            />
                                            </FormControl>
                                            </Grid>
                                        </Grid>}
                                        
                                    
                                        <Grid item xs={12}>
                                        </Grid>


                                        <Grid item xs={6} sm={6}container justify="flex-start">
                                            <Button variant="contained" onClick={prevPage}>
                                                Back
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} sm={6}container justify="flex-end">
                                        <Button variant="contained" color="primary" type="submit" htmlFor="form-sourcing-channel">
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

export default FormSourcingChannel
