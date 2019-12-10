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


export class FormPersonalInformation extends Component {

    render() {

        const { values, nextPage, handleChange} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Personal Information"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={3} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>     
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="First Name"
                            placeholder="Enter First Name"
                            className="textfield-fullwidth"
                            defaultValue={values.firstName}
                            onChange={handleChange('firstName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Middle Name"
                            placeholder="Enter Middle Name"
                            className="textfield-fullwidth"
                            defaultValue={values.middleName}
                            onChange={handleChange('middleName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Last Name"
                            placeholder="Enter Last Name"
                            className="textfield-fullwidth"
                            defaultValue={values.lastName}
                            onChange={handleChange('lastName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            className="textfield-fullwidth"
                            defaultValue={values.birthDay}
                            onChange={handleChange('birthDay')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Birth Place"
                            placeholder="City/Municipality only"
                            className="textfield-fullwidth"
                            defaultValue={values.birthPlace}
                            onChange={handleChange('birthPlace')}
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
                            defaultValue={values.gender}
                            onChange={handleChange('gender')}
                            >
                            <option value="" />
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

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
                            defaultValue={values.civilStatus}
                            onChange={handleChange('civilStatus')}
                            >
                            <option value="" />
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Separated">Separated</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
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
                            defaultValue={values.citizenship}
                            onChange={handleChange('citizenship')}
                            />
                        </Grid>
                        <Grid item xs={12} container justify="flex-end">
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

export default FormPersonalInformation
