import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

export class NavBar extends Component {

    render() {

        const { home, logout, navTitle } = this.props
        return (
                <AppBar position="static">
                <Toolbar>
                {navTitle !== "Qualfon Application Form" && <Button color="inherit" tabIndex={-1} onClick={home} disableFocusRipple disableRipple>Home</Button>}
                <Typography variant="h6" style={{flex: 1}}>
                    {navTitle}
                </Typography>
                {navTitle !== "Qualfon Application Form" && <Button color="inherit" tabIndex={-1} onClick={logout} disableFocusRipple disableRipple>Logout</Button>}
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar
