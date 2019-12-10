import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Divider from '@material-ui/core/Divider'

export class FormEducation extends Component {

    render() {
        const { values, nextPage, prevPage, handleChange} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Educational Background"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                            <h4>Secondary Education</h4>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="High School"
                            placeholder="e.g. Negros Oriental High School"
                            className="textfield-fullwidth"
                            defaultValue={values.highSchool}
                            onChange={handleChange('highSchool')}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2010"
                            className="textfield-fullwidth"
                            defaultValue={values.highSchoolGradYear}
                            onChange={handleChange('highSchoolGradYear')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                            <h4>Tertiary Education</h4>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Univerity/College"
                            placeholder="e.g. Silliman Univeristy"
                            className="textfield-fullwidth"
                            defaultValue={values.college}
                            onChange={handleChange('college')}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2015"
                            className="textfield-fullwidth"
                            defaultValue={values.collegeGradYear}
                            onChange={handleChange('collegeGradYear')}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Course"
                            placeholder="e.g. BS - Computer Science"
                            className="textfield-fullwidth"
                            defaultValue={values.collegeCourse}
                            onChange={handleChange('collegeCourse')}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                                <InputLabel>
                                Attainment
                                </InputLabel>
                                <Select
                                native
                                labelWidth={80}
                                defaultValue={values.collegeAttainment}
                                onChange={handleChange('collegeAttainment')}
                                >
                                <option value=""/>
                                <option value="1st Year Level">1st Year Level</option>
                                <option value="2nd Year Level">2nd Year Level</option>
                                <option value="3rd Year Level">3rd Year Level</option>
                                <option value="4th Year Level">4th Year Level</option>
                                <option value="5th Year Level">5th Year Level</option>
                                <option value="2 Year Graduate">2 Year Graduate</option>
                                <option value="4 Year Graduate">4 Year Graduate</option>
                                <option value="5 Year Graduate">5 Year Graduate</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                            <h4>2nd Degree / Post Graduate / Masters Degree (Optional)</h4>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Univerity/College"
                            placeholder="e.g. Silliman Univeristy"
                            className="textfield-fullwidth"
                            defaultValue={values.college_2}
                            onChange={handleChange('college_2')}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2015"
                            className="textfield-fullwidth"
                            defaultValue={values.collegeGradYear_2}
                            onChange={handleChange('collegeGradYear_2')}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Course"
                            placeholder="e.g. BS - Computer Science"
                            className="textfield-fullwidth"
                            defaultValue={values.collegeCourse_2}
                            onChange={handleChange('collegeCourse_2')}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <FormControl variant="outlined" className="textfield-fullwidth">
                                <InputLabel>
                                Attainment
                                </InputLabel>
                                <Select
                                native
                                labelWidth={80}
                                defaultValue={values.collegeAttainment_2}
                                onChange={handleChange('collegeAttainment_2')}
                                >
                                <option value=""/>
                                <option value="1st Year Level">1st Year Level</option>
                                <option value="2nd Year Level">2nd Year Level</option>
                                <option value="3rd Year Level">3rd Year Level</option>
                                <option value="4th Year Level">4th Year Level</option>
                                <option value="5th Year Level">5th Year Level</option>
                                <option value="4 Year Graduate">4 Year Graduate</option>
                                <option value="5 Year Graduate">5 Year Graduate</option>
                                <option value="Masters Degree">Masters Degree</option>
                                <option value="Doctorate">Doctorate</option>
                                </Select>
                            </FormControl>
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

export default FormEducation
