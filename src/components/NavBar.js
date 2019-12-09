import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class NavBar extends Component {

    render() {
        return (
            <AppBar position="static" className="navBar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        {this.props.navTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar
