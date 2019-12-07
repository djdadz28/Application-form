import React, { Component } from 'react'
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


export class HeaderTracker extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    headerSwitch(currentPage){
        if(currentPage == 1){
            return (
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="headerPageTracker" name="headerPageTracker">
                    <FormControlLabel className="header-button" value="page1" control={<KeyboardArrowRightIcon color="primary" />} label={"Basic Information"} />
                    <FormControlLabel className="header-button" value="page2" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Contact Details" />
                    <FormControlLabel className="header-button" value="page3" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Address" />
                    <FormControlLabel className="header-button" value="page4" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Education" />
                    </RadioGroup>
                </FormControl>
            )
        }
        else if(currentPage == 2){
            return (
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="headerPageTracker" name="headerPageTracker">
                    <FormControlLabel className="header-button" value="page1" disabled control={<KeyboardArrowRightIcon color="disabled" />} label={"Basic Information"} />
                    <FormControlLabel className="header-button" value="page2" control={<KeyboardArrowRightIcon color="primary" />} label="Contact Details" />
                    <FormControlLabel className="header-button" value="page3" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Address" />
                    <FormControlLabel className="header-button" value="page4" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Education" />
                    </RadioGroup>
                </FormControl>
            )
        }
        else if(currentPage == 3){
            return (
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="headerPageTracker" name="headerPageTracker">
                    <FormControlLabel className="header-button" value="page1" disabled control={<KeyboardArrowRightIcon color="disabled" />} label={"Basic Information"} />
                    <FormControlLabel className="header-button" value="page2" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Contact Details" />
                    <FormControlLabel className="header-button" value="page3" control={<KeyboardArrowRightIcon color="primary" />} label="Address" />
                    <FormControlLabel className="header-button" value="page4" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Education" />
                    </RadioGroup>
                </FormControl>
            )
        }
        else if(currentPage == 4){
            return (
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="headerPageTracker" name="headerPageTracker">
                    <FormControlLabel className="header-button" value="page1" disabled control={<KeyboardArrowRightIcon color="disabled" />} label={"Basic Information"} />
                    <FormControlLabel className="header-button" value="page2" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Contact Details" />
                    <FormControlLabel className="header-button" value="page3" disabled control={<KeyboardArrowRightIcon color="disabled" />} label="Address" />
                    <FormControlLabel className="header-button" value="page4" control={<KeyboardArrowRightIcon color="primary" />} label="Education" />
                    </RadioGroup>
                </FormControl>
            )
        }
        
    }


    render() {
        return (
                this.headerSwitch(this.props.currentPage)
            
        )
    }
}

export default HeaderTracker
