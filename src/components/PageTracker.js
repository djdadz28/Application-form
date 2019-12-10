import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export class PageTracker extends Component {
    render() {
        
        const { page } = this.props
        const titleList = [
            "Basic Information",
            "Contact Details",
            "Address",
            "Education",
            "Work Experience",
            "Source",
            "Additional Questions",
            "Terms and Conditions",
            "Confirmation",
            "Success"
        ]

        const Titles = titleList.map((title, i) => <FormControlLabel
                                                    className="header-button"
                                                    value={i+1} key={title}
                                                    disabled={page === i+1 ? false : true}
                                                    control={<KeyboardArrowRightIcon
                                                    color={page === i+1 ? "primary" : "disabled"} />}
                                                    label={title} /> )
        return (
            <FormControl component="fieldset">
                <RadioGroup row aria-label="headerPageTracker" name="headerPageTracker">
                    {Titles}
                </RadioGroup>

            </FormControl>
        )
    }
}

export default PageTracker
