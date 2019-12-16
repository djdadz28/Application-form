import React, { Component } from 'react'
import NavBar from './NavBar'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import QLogo from '../../Qualfon_logo.png'



export class FormLogin extends Component {

    render() {

        const { values, handleChange, login} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Qualfon Application Form" values="values"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} justify="center" alignItems="center" spacing={3} className="textfield-container">
                        <Grid item xs={12} sm={7}>
                        <img src={QLogo} width="100%" alt="Qualfon Logo"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <form style={{width: "100%"}} id="login-form" onSubmit={login}>
                                    <Grid>
                                    <TextField
                                    variant="outlined"
                                    label="Username"
                                    placeholder="Enter your username"
                                    fullWidth
                                    required
                                    defaultValue={''}
                                    onChange={handleChange('email')}
                                    margin="normal"
                                    />
                                    </Grid>
                                    <TextField
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    fullWidth
                                    required
                                    defaultValue={''}
                                    onChange={handleChange('password')}
                                    margin="normal"
                                    />
                                {values.isError && <Grid item xs={12} sm={12}>
                                    <span id="client-snackbar" style={{color: "red"}}>* Invalid username or password</span>
                                </Grid>}
                                
                                <Grid item xs={12}>
                                    <br/>
                                    <Button variant="contained" type="submit" color="primary" form="login-form">
                                        Login
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>
                        
                    </Grid>
                    
                </Container>
            </React.Fragment>
        )
    }
}

export default FormLogin
