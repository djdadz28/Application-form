import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export class ReferralFields extends Component {
    render() {

        

        const { handleChange, values } = this.props

        return (
            <Grid container position={'row'} spacing={2} className="textfield-container">
                <Grid item xs={12} sm={5} >
                    <TextField
                    key="confirmation_code"
                    id="outlined-basic"
                    variant="outlined"
                    label="Referrer"
                    placeholder="Full Name of Referrer"
                    fullWidth
                    defaultValue={values.referrerFullName}
                    onChange={handleChange('referrerFullName')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} >
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Mobile Number"
                    type="number"
                    placeholder="Mobile Number"
                    className="textfield-fullwidth"
                    defaultValue={values.referrerMobile}
                    onChange={handleChange('referrerMobile')}
                    />
                </Grid>
                <Grid item xs={6} sm={3} >
                    {values.specificSource === "Employee Referral (ERP)" && <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Emp. ID#"
                    type="number"
                    placeholder="e.g. 8044"
                    className="textfield-fullwidth"
                    defaultValue={values.referrerID}
                    onChange={handleChange('referrerID')}
                    />}
                </Grid>
            </Grid>
            
        )
    }
}

export default ReferralFields
