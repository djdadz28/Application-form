import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'



export class FormPersonalInformation extends Component {


    render() {

        const { values, nextPage, handleChange, logout} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Personal Information" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            
                            <form id="form-basic-info" onSubmit={(e)=> {e.preventDefault(); nextPage()}}>
                                <Grid container position={'row'} spacing={2} justify="space-between">
                                    <Grid item xs={12}>
                                    <br/>
                                    <Divider variant="middle" />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                    
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="First Name"
                                        placeholder="Enter First Name"
                                        fullWidth
                                        required
                                        defaultValue={values.firstName}
                                        onChange={handleChange('firstName')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Middle Name"
                                        placeholder="Enter Middle Name"
                                        fullWidth
                                        required
                                        defaultValue={values.middleName}
                                        onChange={handleChange('middleName')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Last Name"
                                        placeholder="Enter Last Name"
                                        fullWidth
                                        required
                                        defaultValue={values.lastName}
                                        onChange={handleChange('lastName')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        id="date"
                                        label="Birthdate"
                                        type="date"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        fullWidth
                                        required
                                        defaultValue={values.birthDay}
                                        onChange={handleChange('birthDay')}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Birth Place (City)"
                                        placeholder="e.g. Dumaguete"
                                        fullWidth
                                        required
                                        defaultValue={values.birthPlace}
                                        onChange={handleChange('birthPlace')}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <FormControl variant="outlined" fullWidth required>
                                        <InputLabel>
                                        Gender
                                        </InputLabel>
                                        <Select
                                        native
                                        labelWidth={52}
                                        defaultValue={values.gender}
                                        onChange={handleChange('gender')}
                                        required
                                        >
                                        <option value="" />
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <FormControl variant="outlined" fullWidth required>
                                        <InputLabel>
                                        Civil Status
                                        </InputLabel>
                                        <Select
                                        native
                                        labelWidth={80}
                                        defaultValue={values.civilStatus}
                                        onChange={handleChange('civilStatus')}
                                        required
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
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Citizenship"
                                        placeholder="e.g. Filipino"
                                        fullWidth
                                        defaultValue={values.citizenship}
                                        onChange={handleChange('citizenship')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="flex-end">
                                            <Button variant="contained" type="submit" form="form-basic-info" color="primary">
                                                Continue
                                            </Button>
                                            
                                        </Grid>
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

export default FormPersonalInformation
