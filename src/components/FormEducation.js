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

export class FormEducation extends Component {
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
                            <h4>Secondary Education</h4>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="High School"
                            placeholder="e.g. Negros Oriental High School"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2010"
                            className="textfield-fullwidth"
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
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2015"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Course"
                            placeholder="e.g. BS - Computer Science"
                            className="textfield-fullwidth"
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
                                >
                                <option value=""/>
                                <option value={10}>1st Year Level</option>
                                <option value={20}>2nd Year Level</option>
                                <option value={30}>3rd Year Level</option>
                                <option value={30}>4th Year Level</option>
                                <option value={30}>5th Year Level</option>
                                <option value={30}>2 Year Graduate</option>
                                <option value={30}>4 Year Graduate</option>
                                <option value={30}>5 Year Graduate</option>
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
                            />
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Year"
                            placeholder="e.g. 2015"
                            className="textfield-fullwidth"
                            />
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Course"
                            placeholder="e.g. BS - Computer Science"
                            className="textfield-fullwidth"
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
                                >
                                <option value=""/>
                                <option value={10}>1st Year Level</option>
                                <option value={20}>2nd Year Level</option>
                                <option value={30}>3rd Year Level</option>
                                <option value={30}>4th Year Level</option>
                                <option value={30}>5th Year Level</option>
                                <option value={30}>4 Year Graduate</option>
                                <option value={30}>5 Year Graduate</option>
                                <option value={30}>Masters Degree</option>
                                <option value={30}>Doctorate</option>
                                </Select>
                            </FormControl>
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

export default FormEducation
